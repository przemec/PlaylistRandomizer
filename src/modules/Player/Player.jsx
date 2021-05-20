import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as RP from "../../store/resumableplaylists/actions";
import * as PV from "../../store/player_validators/actions";
import * as L from "../../store/loadstate/actions";
import downloadPlaylistData from "../../assets/apiYT";
import PlayerControl from "../../components/PlayerControl";
import { resetPlayer } from "../../helpers/YTPlayerFunctions";
import { usePrevious } from "../../helpers/PreviousState";
import * as S from "./style";

const Player = ({
  player,
  isPlayerLoaded,
  isPlaylistLoaded,
  currentListID,
  songs,
  currentIndex,
  playingPage,
  autoscroll,
  loopplaylist,
  autorefresh,
  updateIndex,
  playPage,
  setPlaylistState,
  savePlaylist,
  randomizeP,
  resetPageAndIndex,
  nextpage,
  checkprivvids,
}) => {
  let page = playingPage || 0;
  page = page === -1 ? 0 : page;
  let nextSong, prevSong, nextPage, prevPage, currentSong;
  if (songs) {
    if (songs[page]) {
      currentSong = songs[page][currentIndex];
      nextSong = songs[page][currentIndex + 1];
      prevSong = songs[page][currentIndex - 1];
      nextPage = songs[page + 1];
      prevPage = songs[page - 1];
    }
  }
  const previousIndex = usePrevious(currentIndex);
  const previousPage = usePrevious(playingPage);
  const colorizeActive = () => {
    let previous = document.getElementById(`index${previousIndex + previousPage * 200}`);
    let current = document.getElementById(`index${currentIndex + playingPage * 200}`);
    if (previous) {
      previous.classList.remove("isplaying");
    }
    if (current) {
      current.classList.add("isplaying");
    }
  };
  useEffect(() => {
    if (songs) {
      const arr = songs[page] && songs[page].map((ev) => ev.videoId);
      player && player.i && arr && player.cuePlaylist(arr);
      player && player.i && player.playVideoAt(currentIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);
  useEffect(() => {
    if (songs) {
      if (songs[page]) {
        const arr = songs[page].map((ev) => ev.videoId);
        player && player.i && arr && player.cuePlaylist(arr, currentIndex);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingPage]);
  useEffect(() => {
    isPlaylistLoaded === "randomizing" && setPlaylistState("loaded");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaylistLoaded]);
  useEffect(() => {
    if (songs) {
      document.title = (currentSong && currentSong.title) || "YT Randomizer";
      scrollToActive();
      colorizeActive();
      if (songs[page]) {
        player && player.i && savePlaylist(currentListID, songs, currentIndex, page);
        player && player.playVideoAt && player.playVideoAt(currentIndex);
      } else if (!songs[page] && loopplaylist) {
        if (!autorefresh) {
          // const arr = songs[0].map((ev) => ev.videoId);
          // player && arr && player.cuePlaylist(arr);
          resetPageAndIndex();
        } else if (autorefresh) {
          downloadPlaylistData(currentListID, "refresh", () => resetPlayer(null, null, nextpage, checkprivvids));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playingPage]);

  const scrollToActive = (i, p) => {
    let elmnt = document.getElementById(`index${(i || currentIndex) + (p || page) * 200}`);
    if (elmnt && autoscroll) {
      elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
    }
  };
  const playSong = (index, newpage) => {
    updateIndex(index);
    playPage(newpage);
  };
  const playNextSong = () => {
    if (nextSong) {
      playSong(currentIndex + 1, page);
    } else if (nextPage) {
      playSong(0, page + 1);
    }
  };
  const playPrevSong = () => {
    if (prevSong) {
      playSong(currentIndex - 1, page);
    } else if (prevPage) {
      playSong(prevPage.length - 1, page - 1);
    }
  };
  const randomize = () => {
    resetPageAndIndex();
    randomizeP();
    resetPlayer(null, null, nextpage, checkprivvids);
    playPage(-1);
    setPlaylistState("randomizing");
  };
  return (
    <S.PlayerContainer>
      {isPlayerLoaded && (
        <>
          <S.Title onClick={() => scrollToActive()}>{currentSong ? currentSong.title : "..."}</S.Title>
          <S.TitleNext>{currentSong ? (nextSong ? `Next: ${nextSong.title}` : nextPage && nextPage[0] && `Next: ${nextPage[0].title}`) : "..."}</S.TitleNext>
        </>
      )}
      <S.PlayerWrapper id="youtube-player-wrapper">
        <S.Player id="youtube-player" wmode="transparent" />
      </S.PlayerWrapper>
      {isPlayerLoaded && (
        <PlayerControl
          currentListID={currentListID}
          shuffle={randomize}
          refresh={() => downloadPlaylistData(currentListID, "refresh", () => resetPlayer(null, null, nextpage, checkprivvids))}
          playNext={playNextSong}
          playPrev={playPrevSong}
          isPrevActive={prevSong || (prevPage && prevPage[prevPage.length - 1])}
          isNextActive={nextSong || (nextPage && nextPage[0])}
        />
      )}
    </S.PlayerContainer>
  );
};

const mapSTP = (state) => ({
  player: state.player,
  isPlayerLoaded: state.loadstate.isPlayerLoaded,
  isPlaylistLoaded: state.loadstate.isPlaylistLoaded,
  currentListID: state.playlist.id,
  songs: state.playlist.list,
  currentIndex: state.playlist.index,
  playingPage: state.playlist.page,
  autoscroll: state.settings.autoscroll,
  loopplaylist: state.settings.loop,
  autorefresh: state.settings.autorefresh,
});
const mapDTP = (dispatch) => ({
  updateIndex: (e) => dispatch(P.switchIndex(e)),
  playPage: (e) => dispatch(P.switchPage(e)),
  setPlaylistState: (e) => dispatch(L.setPlaylistState(e)),
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  savePlaylist: (id, list, index, page) => dispatch(RP.savePlaylist(id, list, index, page)),
  resetPageAndIndex: () => dispatch(P.resetToZero()),
  nextpage: (e) => dispatch(PV.setIsNextPage(e)),
  checkprivvids: (e) => dispatch(PV.setIsPrivCheck(e)),
});

export default connect(mapSTP, mapDTP)(Player);
