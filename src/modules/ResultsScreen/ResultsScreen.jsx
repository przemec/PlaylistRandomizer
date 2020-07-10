import React from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import ResultsGroup from "../../modules/ResultsGroup";
import ListControl from "../../components/ListControl";
import PlayerControl from "../../components/PlayerControl";
import LoadingPanel from "../../components/LoadingPanel";
import * as S from "./style";

const ResultsScreen = ({ randomizeP, songs, currentListID }) => {
  const [player, setPlayer] = React.useState();
  const [isPlayerLoaded, loadPlayer] = React.useState(false);
  const [currentIndex, updateIndex] = React.useState(0);
  const [currentPage, updatePage] = React.useState(0);
  const [playingPage, playPage] = React.useState(0);
  const [playerState, updatePlayerState] = React.useState(-1);
  const [isnextpage, nextpage] = React.useState(false);
  const [titleswap, swaptitle] = React.useState(false);
  const [listscroll, tryscroll] = React.useState(false);
  React.useEffect(() => {
    const arr = songs[0].map((ev) => ev.videoId);
    player && player.loadPlaylist(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);
  React.useEffect(() => {
    isnextpage && playNextPage();
    nextpage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isnextpage]);
  React.useEffect(() => {
    document.title = songs[playingPage][currentIndex].title;
    swaptitle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleswap]);
  React.useEffect(() => {
    let elmnt = document.getElementById(`index${currentIndex}`);
    if (playingPage === currentPage && elmnt) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
    }
    tryscroll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listscroll]);
  const onPlayerReady = (e) => {
    loadPlayer(true);
    document.getElementById("youtube-player").style.visibility = "visible";
    const arr = songs[currentPage].map((ev) => ev.videoId);
    e.target.loadPlaylist(arr);
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    const arr = songs[currentPage].map((ev) => ev.videoId);
    e.target.playerInfo.playlist = arr;
    updateIndex(e.target.getPlaylistIndex());
    swaptitle(true);
    if (e.target.getPlayerState() === 0) {
      tryscroll(true);
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
        videoId: songs[0][0].videoId,
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
  const playPrevPage = () => {
    if (songs[playingPage - 1]) {
      const elmnt = document.getElementById("songlist");
      elmnt.scrollTop = elmnt.scrollHeight;
      updatePage(playingPage - 1);
      playSong(199, playingPage - 1);
      updateIndex(199);
    }
  };
  const playNextSong = () => {
    if (songs[playingPage][currentIndex + 1]) {
      playSong(currentIndex + 1, playingPage);
    } else if (songs[playingPage + 1]) {
      playNextPage();
    }
  };
  const playPrevSong = () => {
    if (songs[playingPage][currentIndex - 1]) {
      playSong(currentIndex - 1, playingPage);
    } else if (songs[playingPage - 1]) {
      playPrevPage();
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
  console.log(isPlayerLoaded);
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
            switchPlayerState={() => {
              if (playerState === 2) {
                updatePlayerState(1);
                player.playVideo();
              } else if (playerState === 1) {
                player.pauseVideo();
                updatePlayerState(2);
              }
            }}
            playerState={playerState}
          />
        )}
      </S.PlayerContainer>
      {isPlayerLoaded && (
        <S.ResultsContainer>
          <S.ResultsGroupWrapper>
            <ResultsGroup
              songs={songs}
              page={currentPage}
              isHighlighted={playingPage === currentPage}
              changeSong={playSong}
              currentIndex={currentIndex}
            />
            {songs[1] && <ListControl swapPage={swapPage} isNextActive={songs[currentPage + 1]} isPrevActive={songs[currentPage - 1]} />}
          </S.ResultsGroupWrapper>
        </S.ResultsContainer>
      )}
      {!isPlayerLoaded && <LoadingPanel />}
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
