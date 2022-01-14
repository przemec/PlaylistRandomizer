import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as P from "../../store/playlist/actions";
import * as PS from "../../store/playlists/actions";
import * as PV from "../../store/player_validators/actions";
import ResultsGroup from "../../modules/ResultsGroup";
import LoadingPanel from "../../components/LoadingPanel";
import { resetPlayer } from "../../helpers/YTPlayerFunctions";
import * as S from "./style";

const ResultsScreen = ({
  player,
  isPlayerLoaded,
  isPlaylistLoaded,
  currentListID,
  songs,
  isresumed,
  playingPage,
  isnextpage,
  isprivcheck,
  updateIndex,
  playPage,
  nextpage,
  checkprivvids,
  delPrivVidFrList,
  delPrivVidFrLists,
}) => {
  let page = playingPage || 0;
  page = page === -1 ? 0 : page;
  const [lastCheckedPage, setCheckedPage] = React.useState(null);
  useEffect(() => {
    if (songs) {
      isnextpage && playSong(0, page + 1);
      isnextpage && nextpage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isnextpage]);
  useEffect(() => {
    if (isprivcheck) {
      if (lastCheckedPage !== page) {
        if (songs) {
          const delPrivVid = (listId, vidIds) => {
            vidIds.forEach((e) => {
              delPrivVidFrLists(listId, e.videoId);
              delPrivVidFrList(e.videoId, page);
            });
          };
          if (player) {
            if (player.getPlaylist) {
              if (player.getPlaylist()) {
                const playerlist = player.getPlaylist();
                const privVids = songs[page].filter((e) => playerlist.indexOf(e.videoId) === -1);
                privVids.length < 20 && delPrivVid(currentListID, privVids);
                setCheckedPage(page);
              }
            }
          }
        }
        //^if one of videos in currently played playlist is set to private, the page will refresh list
      }
      checkprivvids(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isprivcheck]);
  const playSong = (index, newpage) => {
    updateIndex(index);
    playPage(newpage);
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
            {isPlaylistLoaded !== "refreshing" && isPlaylistLoaded !== "randomizing" ? (
              <ResultsGroup songs={songs} changeSong={playSong} />
            ) : (
              <S.IconWrapper>
                <S.LoopIco />
              </S.IconWrapper>
            )}
          </S.ResultsGroupWrapper>
        </S.ResultsContainer>
      )}
      {!isPlayerLoaded && <LoadingPanel />}
    </>
  );
};

const mapSTP = (state) => ({
  player: state.player,
  isPlayerLoaded: state.loadstate.isPlayerLoaded,
  isPlaylistLoaded: state.loadstate.isPlaylistLoaded,
  songs: state.playlist.list,
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
  nextpage: (e) => dispatch(PV.setIsNextPage(e)),
  checkprivvids: (e) => dispatch(PV.setIsPrivCheck(e)),
});

export default connect(mapSTP, mapDTP)(ResultsScreen);
