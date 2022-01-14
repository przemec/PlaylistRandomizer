import React from "react";
import { connect } from "react-redux";
import downloadPlaylistData from "../../assets/apiYT";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/loadstate/actions";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";

const List = ({
  match,
  randomizeP,
  playlists,
  loadPlaylist,
  playlistLoaded,
  loadingErr,
  setPlaylistState,
  autoshuffle,
  resumableplaylists,
  autoresume,
}) => {
  const [isresumed, iscontinued] = React.useState(false);
  React.useEffect(() => {
    const savedlist = playlists.find((e) => e.id === match.params.id);
    const savedresumablelist = resumableplaylists.find((e) => e.id === match.params.id);
    const isresumed = (match.params.isresumed === "continue" && savedresumablelist) || (autoresume && savedresumablelist);
    if (!savedlist) {
      //case: adding new list to saved
      match.params.id && !playlistLoaded && downloadPlaylistData(match.params.id, "add");
    } else {
      if (!isresumed) {
        if (savedlist.list) {
          //case: list that user played before
          const { list, id, updated } = savedlist;
          loadPlaylist(list, id, updated);
          autoshuffle && randomizeP();
          setPlaylistState("loaded");
        } else {
          //case: user clicks featured list
          downloadPlaylistData(match.params.id, "refresh");
        }
      } else {
        const { list, id, updated } = savedresumablelist;
        loadPlaylist(list, id, updated, "isbeingresumed");
        iscontinued(true);
        setPlaylistState("loaded");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? (
    <ResultsScreen currentListID={match.params.id} isresumed={isresumed} />
  ) : (
    <LoadingPanel err={loadingErr} />
  );
};

const mapSTP = (state) => ({
  playlists: state.playlists,
  playlistLoaded: state.loadstate.isPlaylistLoaded,
  loadingErr: state.loadstate.isPlaylistError,
  autoshuffle: state.settings.autoshuffle,
  autoresume: state.settings.autoresume,
  resumableplaylists: state.resumableplaylists,
});

const mapDTP = (dispatch) => ({
  randomizeP: () => dispatch(P.randomizePlaylist()),
  loadPlaylist: (list, id, updated, isbeingresumed) => dispatch(P.loadPlaylist(list, id, updated, isbeingresumed)),
  setPlaylistState: (e) => dispatch(L.setPlaylistState(e)),
});

export default connect(mapSTP, mapDTP)(List);
