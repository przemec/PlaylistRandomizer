import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as RP from "../../store/resumableplaylists/actions";
import * as PV from "../../store/player_validators/actions";
import downloadPlaylistData from "../../assets/apiYT";
import PlayerControl from "../../components/PlayerControl";
import { resetPlayer } from "../../helpers/YTPlayerFunctions";
import * as S from "./style";

const Player = ({
  player,
  isPlayerLoaded,
  currentListID,
  songs,
  currentIndex,
  playingPage,
  autoscroll,
  loopplaylist,
  autorefresh,
  updateIndex,
  playPage,
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
      const arr = songs[page].map((ev) => ev.videoId);
      player && player.i && arr && player.cuePlaylist(arr, currentIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingPage]);
  useEffect(() => {
    if (songs) {
      document.title = (currentSong && currentSong.title) || "YT Randomizer";
      scrollToActive();
      player && player.i && savePlaylist(currentListID, songs, currentIndex, page);
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
    if (newpage !== page && songs[newpage]) {
      index !== currentIndex && updateIndex(index);
      newpage !== playingPage && playPage(newpage);
    } else if (songs[newpage]) {
      player && player.playVideoAt(index);
      index !== currentIndex && updateIndex(index);
    } else if (!songs[newpage] && loopplaylist) {
      if (!autorefresh) {
        resetPageAndIndex();
        const arr = songs[0].map((ev) => ev.videoId);
        player && arr && player.cuePlaylist(arr);
      } else if (autorefresh) {
        downloadPlaylistData(currentListID, "refresh", () => resetPlayer(null, null, nextpage, checkprivvids));
      }
    }
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
  randomizeP: (e) => dispatch(P.randomizePlaylist(e)),
  savePlaylist: (id, list, index, page) => dispatch(RP.savePlaylist(id, list, index, page)),
  resetPageAndIndex: () => dispatch(P.resetToZero()),  
  nextpage: (e) => dispatch(PV.setIsNextPage(e)),
  checkprivvids: (e) => dispatch(PV.setIsPrivCheck(e)),
});

export default connect(mapSTP, mapDTP)(Player);
