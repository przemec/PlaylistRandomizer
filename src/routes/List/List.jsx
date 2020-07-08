import React from "react";
import { connect } from "react-redux";
import downloadPlaylistData from "../../assets/apiYT";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/listloadstate/actions";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";

const List = ({ match, sliceP, randomizeP, playlists, loadPlaylist, playlistLoaded, loadingErr, updatePLstate }) => {
  React.useEffect(() => {
    const savedlist = playlists.filter((e) => e.id === match.params.id && e);
    if (savedlist.length !== 0) {
      const { list, id, updated, isFav } = savedlist[0];
      loadPlaylist(list, id, updated, isFav);
      sliceP();
      randomizeP();
      updatePLstate(true);
    } else {
      match.params.id && !playlistLoaded && downloadPlaylistData(match.params.id, "add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? <ResultsScreen currentListID={match.params.id} /> : <LoadingPanel err={loadingErr} />;
};

const mapSTP = (state) => ({
  playlists: state.playlists,
  playlistLoaded: state.listloadstate.isLoaded,
  loadingErr: state.listloadstate.isError,
});

const mapDTP = (dispatch) => ({
  randomizeP: () => {
    dispatch(P.randomizePlaylist());
  },
  sliceP: () => {
    dispatch(P.slicePlaylist());
  },
  loadPlaylist: (list, id, updated, isFav) => {
    dispatch(P.loadPlaylist(list, id, updated, isFav));
  },
  updatePLstate: (e) => {
    dispatch(L.updatePLstate(e));
  },
});

export default connect(mapSTP, mapDTP)(List);
