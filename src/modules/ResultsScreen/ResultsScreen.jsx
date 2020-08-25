import React from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import * as RP from "../../store/resumableplaylists/actions";
import downloadPlaylistData from "../../assets/apiYT";
import ResultsGroup from "../../modules/ResultsGroup";
import PlayerControl from "../../components/PlayerControl";
import LoadingPanel from "../../components/LoadingPanel";
import * as S from "./style";

const ResultsScreen = React.memo(({ randomizeP, songs, currentListID, autoscroll, savePlaylist, isresumed, resumableplaylists }) => {
  const [player, setPlayer] = React.useState();
  const [isPlayerLoaded, loadPlayer] = React.useState(false);
  const [currentIndex, updateIndex] = React.useState(0);
  const [playingPage, playPage] = React.useState(0);
  const [isnextpage, nextpage] = React.useState(false);
  const currentSong = songs[playingPage][currentIndex];
  const nextSong = songs[playingPage][currentIndex + 1];
  const prevSong = songs[playingPage][currentIndex - 1];
  const nextPage = songs[playingPage + 1];
  const prevPage = songs[playingPage - 1];
  const onPlayerReady = (e) => {
    loadPlayer(true);
    document.getElementById("youtube-player").style.visibility = "visible";
    const arr = songs[playingPage].map((ev) => ev.videoId);
    e.target.loadPlaylist(arr);
    if (isresumed) {
      const newdata = resumableplaylists.filter((e) => e.id === currentListID)[0];
      updateIndex(newdata.index);
      playPage(newdata.page);
      const arr = songs[newdata.page].map((ev) => ev.videoId);
      e.target.loadPlaylist(arr);
      e.target.playVideoAt(newdata.index);
    }
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    if (e.target.getPlayerState() === 0) {
      updateIndex(e.target.getPlaylistIndex());
      e.target.getPlaylistIndex() === e.target.getPlaylist().length - 1 && nextpage(true);
    }
    if (e.target.getPlayerState() === -1) {
      updateIndex(e.target.getPlaylistIndex());
    }
  };
  React.useEffect(() => {
    updateIndex(0);
    playPage(0);
    const arr = songs[0].map((ev) => ev.videoId);
    player && player.s && player.loadPlaylist(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);
  React.useEffect(() => {
    isnextpage && playSong(0, playingPage + 1);
    nextpage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isnextpage]);
  React.useEffect(() => {
    !isresumed &&
      player &&
      player.getVideoUrl() &&
      player.getVideoUrl().split("=")[1] !== currentSong.videoId &&
      downloadPlaylistData(currentListID, "refresh");
    //^if one of videos in currently played playlist is set to private, the page will refresh list
    document.title = currentSong && currentSong.title;
    let elmnt = document.getElementById(`index${currentIndex + playingPage * 200}`);
    if (elmnt && autoscroll) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
    }
    if (currentIndex || playingPage) {
      //savePlaylist won't exec right after loading page
      savePlaylist(currentListID, songs, currentIndex, playingPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playingPage]);
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
        videoId: songs[0][0].videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };
  const playNextSong = () => {
    if (nextSong) {
      playSong(currentIndex + 1, playingPage, "click");
    } else if (nextPage) {
      playSong(0, playingPage + 1, "click");
    }
  };
  const playPrevSong = () => {
    if (prevSong) {
      playSong(currentIndex - 1, playingPage, "click");
    } else if (prevPage) {
      playSong(199, playingPage - 1, "click");
    }
  };
  const playSong = (index, page, interaction) => {
    if (page !== playingPage && songs[page]) {
      const arr = songs[page].map((ev) => ev.videoId);
      player.loadPlaylist(arr, index);
      playPage(page);
      interaction !== "click" && updateIndex(index);
    } else if (songs[page]) {
      player.playVideoAt(index);
      interaction !== "click" && updateIndex(index);
    }
  };
  return (
    <S.MainCont>
      <S.PlayerContainer>
        {isPlayerLoaded && (
          <>
            <S.Title>{currentSong && currentSong.title}</S.Title>
            <S.TitleNext>{nextSong ? "Next: " + nextSong.title : nextPage && "Next: " + nextPage[0].title}</S.TitleNext>
          </>
        )}
        <S.PlayerWrapper>
          <S.Player id="youtube-player" wmode="transparent" />
        </S.PlayerWrapper>
        {isPlayerLoaded && (
          <PlayerControl
            currentListID={currentListID}
            shuffle={randomizeP}
            playNext={playNextSong}
            playPrev={playPrevSong}
            isPrevActive={prevSong || (prevPage && prevPage[199])}
            isNextActive={nextSong || (nextPage && nextPage[0])}
          />
        )}
      </S.PlayerContainer>
      {isPlayerLoaded && (
        <S.ResultsContainer>
          <S.ResultsGroupWrapper>
            <ResultsGroup songs={songs} playingPage={playingPage} changeSong={playSong} currentIndex={currentIndex} />
          </S.ResultsGroupWrapper>
        </S.ResultsContainer>
      )}
      {!isPlayerLoaded && <LoadingPanel />}
    </S.MainCont>
  );
});

const mapSTP = (state) => ({
  songs: state.playlist.list,
  autoscroll: state.settings.autoscroll,
  resumableplaylists: state.resumableplaylists,
});
const mapDTP = (dispatch) => ({
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  editPlaylist: (e, list) => dispatch(PS.editPlaylist(e, list)),
  savePlaylist: (id, list, index, page) => dispatch(RP.savePlaylist(id, list, index, page)),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
