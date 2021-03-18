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

const ResultsScreen = React.memo(
  ({
    currentIndex,
    playingPage,
    updateIndex,
    playPage,
    songs,
    currentListID,
    randomizeP,
    autoscroll,
    savePlaylist,
    isresumed,
    resumableplaylists,
    delPrivVidFrList,
    delPrivVidFrLists,
    resetPageAndIndex,
    loopplaylist,
    autorefresh,
  }) => {
    const [player, setPlayer] = React.useState();
    const [isPlayerLoaded, loadPlayer] = React.useState(false);
    const [isnextpage, nextpage] = React.useState(false);
    const [isprivcheck, checkprivvids] = React.useState(false);
    const currentSong = songs[playingPage][currentIndex];
    const nextSong = songs[playingPage][currentIndex + 1];
    const prevSong = songs[playingPage][currentIndex - 1];
    const nextPage = songs[playingPage + 1];
    const prevPage = songs[playingPage - 1];
    const onPlayerReady = (e) => {
      loadPlayer(true);
      document.getElementById("youtube-player-wrapper").style.visibility = "visible";
      if (!isresumed) {
        const arr = songs[playingPage].map((ev) => ev.videoId);
        e.target.cuePlaylist(arr);
      } else {
        const newdata = resumableplaylists.filter((e) => e.id === currentListID)[0];
        const arr = songs[newdata.page].map((ev) => ev.videoId);
        e.target.cuePlaylist(arr);
        e.target.playVideoAt(newdata.index);
        updateIndex(newdata.index);
        playPage(newdata.page);
        let elmnt = document.getElementById(`index${newdata.index + newdata.page * 200}`);
        if (elmnt && autoscroll) {
          elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
        }
      }
      // const that = e.target;
      // setTimeout(() => {
      //   that.stopVideo();
      // }, 1000);
    };
    const onPlayerStateChange = (e) => {
      if (e.target.getPlayerState() === 0) {
        e.target.getPlaylistIndex() !== currentIndex && updateIndex(e.target.getPlaylistIndex());
        e.target.getVideoUrl().split("=")[1].length < 8 && nextpage(true);
      } else if (e.target.getPlayerState() === -1) {
        e.target.getPlaylistIndex() !== currentIndex && updateIndex(e.target.getPlaylistIndex());
      } else if (e.target.getPlayerState() === 5) {
        e.target.playVideo();
        checkprivvids(true);
      }
    };
    React.useEffect(() => {
      const arr = songs[playingPage] && songs[playingPage].map((ev) => ev.videoId);
      player && player.i && arr && player.cuePlaylist(arr);
      player && player.i && player.playVideoAt(currentIndex);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [songs]);
    React.useEffect(() => {
      const arr = songs[playingPage].map((ev) => ev.videoId);
      player && player.i && arr && player.cuePlaylist(arr, currentIndex);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playingPage]);
    React.useEffect(() => {
      isnextpage && playSong(0, playingPage + 1);
      nextpage(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isnextpage]);
    React.useEffect(() => {
      if (isprivcheck) {
        const delPrivVid = (listId, vidIds) => {
          vidIds.forEach((e) => {
            delPrivVidFrLists(listId, e.videoId);
            delPrivVidFrList(e.videoId, playingPage);
          });
        };
        if (player) {
          if (player.getPlaylist()) {
            const playerlist = player.getPlaylist();
            const privVids = songs[playingPage].filter((e) => playerlist.indexOf(e.videoId) === -1);
            privVids.length < 20 && delPrivVid(currentListID, privVids);
          }
        }

        //^if one of videos in currently played playlist is set to private, the page will refresh list
      }
      checkprivvids(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isprivcheck]);
    React.useEffect(() => {
      document.title = currentSong && currentSong.title;
      let elmnt = document.getElementById(`index${currentIndex + playingPage * 200}`);
      if (elmnt && autoscroll) {
        elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
      }
      if (currentIndex || playingPage) {
        //savePlaylist won't exec right after loading page
        player && player.i && savePlaylist(currentListID, songs, currentIndex, playingPage);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, playingPage]);
    const playNextSong = () => {
      if (nextSong) {
        playSong(currentIndex + 1, playingPage);
      } else if (nextPage) {
        playSong(0, playingPage + 1);
      }
    };
    const playPrevSong = () => {
      if (prevSong) {
        playSong(currentIndex - 1, playingPage);
      } else if (prevPage) {
        playSong(prevPage.length - 1, playingPage - 1);
      }
    };
    const playSong = (index, page) => {
      if (page !== playingPage && songs[page]) {
        updateIndex(index);
        playPage(page);
      } else if (songs[page]) {
        player.playVideoAt(index);
        updateIndex(index);
      } else if (!songs[page] && loopplaylist) {
        if (!autorefresh) {
          resetPageAndIndex();
          const arr = songs[0].map((ev) => ev.videoId);
          player && arr && player.cuePlaylist(arr);
        } else if (autorefresh) {
          downloadPlaylistData(currentListID, "refresh", resetPlayer);
        }
      }
    };
    const resetPlayer = (create) => {
      if (!create) {
        player.destroy();
        window.YT = undefined;
        window.onYouTubeIframeAPIReady = undefined;
        let c = [...document.getElementsByTagName("script")];
        // eslint-disable-next-line array-callback-return
        c.map((e) => {
          e.src === "https://www.youtube.com/iframe_api" && e.remove();
        });
      }
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
    };
    resetPlayer("create");
    const randomize = () => {
      resetPageAndIndex();
      randomizeP();
      resetPlayer();
    };
    return (
      <S.MainCont>
        <S.PlayerContainer>
          {isPlayerLoaded && (
            <>
              <S.Title>{currentSong && currentSong.title}</S.Title>
              <S.TitleNext>{nextSong ? `Next: ${nextSong.title}` : nextPage && nextPage[0] && `Next: ${nextPage[0].title}`}</S.TitleNext>
            </>
          )}
          <S.PlayerWrapper id="youtube-player-wrapper">
            <S.Player id="youtube-player" wmode="transparent" />
          </S.PlayerWrapper>
          {isPlayerLoaded && (
            <PlayerControl
              currentListID={currentListID}
              shuffle={randomize}
              refresh={() => downloadPlaylistData(currentListID, "refresh", resetPlayer)}
              playNext={playNextSong}
              playPrev={playPrevSong}
              isPrevActive={prevSong || (prevPage && prevPage[prevPage.length - 1])}
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
  }
);

const mapSTP = (state) => ({
  songs: state.playlist.list,
  autoscroll: state.settings.autoscroll,
  loopplaylist: state.settings.loop,
  autorefresh: state.settings.autorefresh,
  resumableplaylists: state.resumableplaylists,
  currentIndex: state.playlist.index,
  playingPage: state.playlist.page,
});
const mapDTP = (dispatch) => ({
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  editPlaylist: (e, list) => dispatch(PS.editPlaylist(e, list)),
  delPrivVidFrLists: (id, vidID) => dispatch(PS.deletePrivateVidFromPlaylists(id, vidID)),
  delPrivVidFrList: (vidID, page) => dispatch(P.deletePrivateVidFromPlaylist(vidID, page)),
  savePlaylist: (id, list, index, page) => dispatch(RP.savePlaylist(id, list, index, page)),
  playPage: (e) => dispatch(P.switchPage(e)),
  updateIndex: (e) => dispatch(P.switchIndex(e)),
  resetPageAndIndex: () => dispatch(P.resetToZero()),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
