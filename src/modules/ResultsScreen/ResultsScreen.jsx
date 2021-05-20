import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import * as PV from "../../store/player_validators/actions";
import downloadPlaylistData from "../../assets/apiYT";
import ResultsGroup from "../../modules/ResultsGroup";
import LoadingPanel from "../../components/LoadingPanel";
import { resetPlayer } from "../../helpers/YTPlayerFunctions";
import * as S from "./style";

const ResultsScreen = React.memo(
  ({
    player,
    isPlayerLoaded,
    currentListID,
    songs,
    isresumed,
    currentIndex = 0,
    playingPage,
    loopplaylist,
    autorefresh,
    isnextpage,
    isprivcheck,
    updateIndex,
    playPage,
    resetPageAndIndex,
    nextpage,
    checkprivvids,
    delPrivVidFrList,
    delPrivVidFrLists,
  }) => {
    let page = playingPage || 0;
    page = page === -1 ? 0 : page;
    useEffect(() => {
      if (songs) {
        isnextpage && playSong(0, page + 1);
        isnextpage && nextpage(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isnextpage]);
    useEffect(() => {
      if (songs) {
        if (isprivcheck) {
          const delPrivVid = (listId, vidIds) => {
            vidIds.forEach((e) => {
              delPrivVidFrLists(listId, e.videoId);
              delPrivVidFrList(e.videoId, page);
            });
          };
          if (player) {
            if (player.getPlaylist()) {
              const playerlist = player.getPlaylist();
              const privVids = songs[page].filter((e) => playerlist.indexOf(e.videoId) === -1);
              privVids.length < 20 && delPrivVid(currentListID, privVids);
            }
          }
          //^if one of videos in currently played playlist is set to private, the page will refresh list
        }
      }
      isprivcheck && checkprivvids(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isprivcheck]);
    const playSong = (index, newpage) => {
      if (newpage !== page && songs[newpage]) {
        index !== currentIndex && updateIndex(index);
        newpage !== playingPage && playPage(newpage);
      } else if (songs[newpage]) {
        player && player.playVideoAt && player.playVideoAt(index);
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
    useEffect(() => {
      resetPlayer("create", isresumed, nextpage, checkprivvids);
      document.getElementById("list-container").style.removeProperty("display");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <>
        {isPlayerLoaded && (
          <S.ResultsContainer>
            <S.ResultsGroupWrapper>
              <ResultsGroup songs={songs} playingPage={page} changeSong={playSong} currentIndex={currentIndex} />
            </S.ResultsGroupWrapper>
          </S.ResultsContainer>
        )}
        {!isPlayerLoaded && <LoadingPanel />}
      </>
    );
  }
);

const mapSTP = (state) => ({
  player: state.player,
  isPlayerLoaded: state.loadstate.isPlayerLoaded,
  songs: state.playlist.list,
  loopplaylist: state.settings.loop,
  autorefresh: state.settings.autorefresh,
  resumableplaylists: state.resumableplaylists,
  currentIndex: state.playlist.index,
  playingPage: state.playlist.page,
  isnextpage: state.player_validators.nextpage,
  isprivcheck: state.player_validators.checkprivvids,
});
const mapDTP = (dispatch) => ({
  delPrivVidFrLists: (id, vidID) => dispatch(PS.deletePrivateVidFromPlaylists(id, vidID)),
  delPrivVidFrList: (vidID, page) => dispatch(P.deletePrivateVidFromPlaylist(vidID, page)),
  playPage: (e) => dispatch(P.switchPage(e)),
  updateIndex: (e) => dispatch(P.switchIndex(e)),
  resetPageAndIndex: () => dispatch(P.resetToZero()),
  nextpage: (e) => dispatch(PV.setIsNextPage(e)),
  checkprivvids: (e) => dispatch(PV.setIsPrivCheck(e)),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
