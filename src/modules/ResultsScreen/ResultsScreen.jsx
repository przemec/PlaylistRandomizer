import React from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import ResultsGroup from "../../modules/ResultsGroup";
import PlayerControl from "../../components/PlayerControl";
import LoadingPanel from "../../components/LoadingPanel";
import * as S from "./style";

const ResultsScreen = React.memo(({ randomizeP, songs, currentListID }) => {
  const [player, setPlayer] = React.useState();
  const [isPlayerLoaded, loadPlayer] = React.useState(false);
  const [currentIndex, updateIndex] = React.useState(0);
  const [playingPage, playPage] = React.useState(0);
  const [isnextpage, nextpage] = React.useState(false);
  React.useEffect(() => {
    const arr = songs[0].map((ev) => ev.videoId);
    player && player.loadPlaylist(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);
  React.useEffect(() => {
    isnextpage && playSong(0, playingPage + 1);
    nextpage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isnextpage]);
  React.useEffect(() => {
    document.title = songs[playingPage][currentIndex].title;
    let elmnt = document.getElementById(`index${currentIndex + playingPage * 200}`);
    if (elmnt) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playingPage]);
  const onPlayerReady = (e) => {
    loadPlayer(true);
    document.getElementById("youtube-player").style.visibility = "visible";
    const arr = songs[playingPage].map((ev) => ev.videoId);
    e.target.loadPlaylist(arr);
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    if (e.target.getPlayerState() === 0 || e.target.getPlayerState() === -1) {
      updateIndex(e.target.getPlaylistIndex());
      e.target.getPlaylistIndex() === 199 && nextpage(true);
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
        videoId: songs[0][0].videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };
  const playNextSong = () => {
    if (songs[playingPage][currentIndex + 1]) {
      playSong(currentIndex + 1, playingPage);
    } else if (songs[playingPage + 1]) {
      playSong(0, playingPage + 1);
    }
  };
  const playPrevSong = () => {
    if (songs[playingPage][currentIndex - 1]) {
      playSong(currentIndex - 1, playingPage);
    } else if (songs[playingPage - 1]) {
      playSong(199, playingPage - 1);
    }
  };
  const playSong = (index, page) => {
    if (page !== playingPage) {
      const arr = songs[page].map((ev) => ev.videoId);
      player.loadPlaylist(arr, index);
      playPage(page);
    } else {
      player.playVideoAt(index);
    }
  };
  return (
    <S.MainCont>
      <S.PlayerContainer>
        {isPlayerLoaded && (
          <>
            <S.Title>{songs[playingPage][currentIndex].title}</S.Title>
            <S.TitleNext>
              {songs[playingPage][currentIndex + 1]
                ? "Next: " + songs[playingPage][currentIndex + 1].title
                : songs[playingPage + 1] && "Next: " + songs[playingPage + 1][0].title}
            </S.TitleNext>
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
            isPrevActive={songs[playingPage][currentIndex - 1] || (songs[playingPage - 1] && songs[playingPage - 1][199])}
            isNextActive={songs[playingPage][currentIndex + 1] || (songs[playingPage + 1] && songs[playingPage + 1][0])}
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
});
const mapDTP = (dispatch) => ({
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  editPlaylist: (e, list) => dispatch(PS.editPlaylist(e, list)),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
