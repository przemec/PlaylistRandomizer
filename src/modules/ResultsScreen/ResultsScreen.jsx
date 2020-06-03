import React from "react";
import ResultsGroup from "../../modules/ResultsGroup";
import { Grid } from "@material-ui/core";
import { store } from "../../store";
import { randomizePlaylist } from "../../store/actions";
import * as S from "./style";

const ResultsScreen = () => {
  const [pages, updatePages] = React.useState(store.getState().playlist);
  const [player, setPlayer] = React.useState();
  const [currentIndex, updateIndex] = React.useState(0);
  const [currentPage, updatePage] = React.useState(0);
  const [playingPage, playPage] = React.useState(0);
  const [nextDisplay, displayNext] = React.useState(false);
  const onPlayerReady = (e) => {
    const arr = pages[currentPage].map((ev) => ev.snippet.resourceId.videoId);
    e.target.loadPlaylist(arr);
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    const arr = pages[currentPage].map((ev) => ev.snippet.resourceId.videoId);
    e.target.playerInfo.playlist = arr;
    updateIndex(e.target.getPlaylistIndex());
    let elmnt = document.getElementById(`index${e.target.getPlaylistIndex()}`);
    const title = elmnt.getElementsByClassName(`title`)[0].innerHTML;
    document.title = title;
    if (e.target.getPlayerState() === 0) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
      e.target.getPlaylistIndex() === 199 && displayNext(true);
    }
  };
  if (!window.YT) {
    let c = document.getElementsByTagName("script").length;
    let m = true;
    for (let i = 0; i < c; i++) {
      document.getElementsByTagName("script")[i].src === "https://www.youtube.com/iframe_api" && (m = false);
    }
    if (m) {
      let tag = document.createElement("script");
      tag.onload = () => console.log("YOUTUBE IFRAME API LOADED");
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  window.onYouTubeIframeAPIReady = () => {
    setPlayer(
      new window.YT.Player("youtube-player", {
        videoId: pages[0][0].snippet.resourceId.videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };
  const nextPage = () => {
    if (pages[currentPage + 1]) {
      updatePage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (pages[currentPage - 1]) {
      updatePage(currentPage - 1);
    }
  };
  const playNextPage = () => {
    if (pages[playingPage + 1]) {
      updatePage(playingPage + 1);
      playSong(0, playingPage + 1);
      updateIndex(0);
      displayNext(false);
    }
  };
  const playSong = (index, page) => {
    if (page !== playingPage) {
      const arr = pages[page].map((ev) => ev.snippet.resourceId.videoId);
      player.loadPlaylist(arr, index);
      playPage(page);
    } else {
      player.playVideoAt(index);
    }
  };
  const shuffle = async () => {
    await store.dispatch(randomizePlaylist());
    updatePages(store.getState().playlist);
    const arr = store.getState().playlist[0].map((ev) => ev.snippet.resourceId.videoId);
    player.loadPlaylist(arr);
  };
  return (
    <Grid container style={{ height: "100vh" }}>
      <S.PlayerContainer item>
        <S.Title>{pages[playingPage][currentIndex].snippet.title}</S.Title>
        <S.PlayerWrapper>
          <S.Player id="youtube-player" />
        </S.PlayerWrapper>
        {nextDisplay && <S.Button200 onClick={playNextPage}>Click to play next 200 songs</S.Button200>}
      </S.PlayerContainer>
      <S.ResultsContainer item>
        <ResultsGroup
          songs={pages[currentPage]}
          page={currentPage}
          isHighlighted={playingPage === currentPage}
          changeSong={playSong}
          currentIndex={currentIndex}
        />
      </S.ResultsContainer>
    </Grid>
  );
};

export default ResultsScreen;
