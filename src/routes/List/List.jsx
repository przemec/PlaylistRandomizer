import React from "react";
import { connect } from "react-redux";
import downloadPlaylistData from "../../assets/apiYT";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/listloadstate/actions";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";

const List = ({
  match,
  sliceP,
  randomizeP,
  playlists,
  loadPlaylist,
  playlistLoaded,
  loadingErr,
  updatePLstate,
  autoshuffle,
  resumableplaylists,
  autoresume,
}) => {
  const [isresumed, iscontinued] = React.useState(false);
  React.useEffect(() => {
    const savedlist = playlists.filter((e) => e.id === match.params.id && e);
    const savedresumablelist = resumableplaylists.filter((e) => e.id === match.params.id && e);
    const isresumed = (match.params.isresumed === "continue" && savedresumablelist[0]) || (autoresume && savedresumablelist[0]);
    if (!savedlist[0]) {
      //case: adding new list to saved
      match.params.id && !playlistLoaded && downloadPlaylistData(match.params.id, "add");
    } else {
      if (!isresumed) {
        if (savedlist[0].list) {
          //case: list that user played before
          const { list, id, updated, isFav } = savedlist[0];
          loadPlaylist(list, id, updated, isFav);
          sliceP();
          autoshuffle && randomizeP();
          updatePLstate(true);
        } else {
          //case: user clicks featured list
          downloadPlaylistData(match.params.id, "refresh");
        }
      } else {
        const { list, id, updated, isFav } = savedresumablelist[0];
        loadPlaylist(list, id, updated, isFav);
        iscontinued(true);
        updatePLstate(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? <ResultsScreen currentListID={match.params.id} isresumed={isresumed} /> : <LoadingPanel err={loadingErr} />;
};

const mapSTP = (state) => ({
  playlists: state.playlists,
  playlistLoaded: state.listloadstate.isLoaded,
  loadingErr: state.listloadstate.isError,
  autoshuffle: state.settings.autoshuffle,
  autoresume: state.settings.autoresume,
  resumableplaylists: state.resumableplaylists,
});

const mapDTP = (dispatch) => ({
  randomizeP: () => dispatch(P.randomizePlaylist()),
  sliceP: () => dispatch(P.slicePlaylist()),
  loadPlaylist: (list, id, updated, isFav) => dispatch(P.loadPlaylist(list, id, updated, isFav)),
  updatePLstate: (e) => dispatch(L.updatePLstate(e)),
});

export default connect(mapSTP, mapDTP)(List);
