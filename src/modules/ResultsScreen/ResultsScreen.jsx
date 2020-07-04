import React from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import ResultsGroup from "../../modules/ResultsGroup";
import ListControl from "../../components/ListControl";
import PlayerControl from "../../components/PlayerControl";
import * as S from "./style";

const ResultsScreen = ({ randomizeP, songs, currentListID }) => {
  const [player, setPlayer] = React.useState();
  const [isPlayerLoaded, loadPlayer] = React.useState(false);
  const [currentIndex, updateIndex] = React.useState(0);
  const [currentPage, updatePage] = React.useState(0);
  const [playingPage, playPage] = React.useState(0);
  const [playerState, updatePlayerState] = React.useState(-1);
  const [isnextpage, nextpage] = React.useState(false);
  React.useEffect(() => {
    const arr = songs[0].map((ev) => ev.snippet.resourceId.videoId);
    player && player.loadPlaylist(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);
  React.useEffect(() => {
    isnextpage && playNextPage();
    nextpage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isnextpage]);
  const onPlayerReady = (e) => {
    loadPlayer(true);
    const arr = songs[currentPage].map((ev) => ev.snippet.resourceId.videoId);
    e.target.loadPlaylist(arr);
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    const arr = songs[currentPage].map((ev) => ev.snippet.resourceId.videoId);
    e.target.playerInfo.playlist = arr;
    updateIndex(e.target.getPlaylistIndex());
    let elmnt = document.getElementById(`index${e.target.getPlaylistIndex()}`);
    let title = elmnt && elmnt.getElementsByClassName(`title`)[0].innerHTML;
    document.title = title;
    if (e.target.getPlayerState() === 0) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
      e.target.getPlaylistIndex() === 199 && nextpage(true);
    }
    if (e.target.getPlayerState() === 1 || e.target.getPlayerState() === 2) {
      updatePlayerState(e.target.getPlayerState());
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
        videoId: songs[0][0].snippet.resourceId.videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };
  const swapPage = (x) => {
    if (songs[currentPage + x]) {
      updatePage(currentPage + x);
    }
  };
  const playNextPage = () => {
    if (songs[playingPage + 1]) {
      document.getElementById("songlist").scrollTop = 0;
      updatePage(playingPage + 1);
      playSong(0, playingPage + 1);
      updateIndex(0);
    }
  };
  const playSong = (index, page) => {
    if (page !== playingPage) {
      const arr = songs[page].map((ev) => ev.snippet.resourceId.videoId);
      player.loadPlaylist(arr, index);
      playPage(page);
    } else {
      player.playVideoAt(index);
    }
  };
  return (
    <S.MainCont>
      <S.PlayerContainer>
        <S.Title>{songs[playingPage][currentIndex].snippet.title}</S.Title>
        <S.TitleNext>
          {songs[playingPage][currentIndex + 1]
            ? "Next: " + songs[playingPage][currentIndex + 1].snippet.title
            : songs[playingPage + 1] && "Next: " + songs[playingPage + 1][0].snippet.title}
        </S.TitleNext>
        <S.PlayerWrapper>
          <S.Player id="youtube-player" wmode="transparent" />
        </S.PlayerWrapper>
        {isPlayerLoaded && (
          <PlayerControl
            currentListID={currentListID}
            shuffle={randomizeP}
            playNext={() => player.nextVideo()}
            playPrev={() => player.previousVideo()}
            switchPlayerState={() => (playerState === 2 ? player.playVideo() : player.pauseVideo())}
            playerState={playerState}
          />
        )}
      </S.PlayerContainer>
      <S.ResultsContainer>
        <S.ResultsGroupWrapper>
          <ResultsGroup
            songs={songs}
            page={currentPage}
            isHighlighted={playingPage === currentPage}
            changeSong={playSong}
            currentIndex={currentIndex}
          />
          {songs[1] && (
            <ListControl swapPage={swapPage} isNextActive={songs[currentPage + 1]} isPrevActive={songs[currentPage - 1]} />
          )}
        </S.ResultsGroupWrapper>
      </S.ResultsContainer>
    </S.MainCont>
  );
};

const mapSTP = (state) => ({
  songs: state.playlist.list,
});
const mapDTP = (dispatch) => ({
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  editPlaylist: (e, list) => dispatch(PS.editPlaylist(e, list)),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
