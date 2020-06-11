import React from "react";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import Modal from "../../modules/Modal";
import * as P from "../../store/playlist/actions";
import * as M from "../../store/modal/actions";
import * as L from "../../store/listloadstate/actions";
import downloadPlaylistData from "../../assets/apiYT";
import { connect } from "react-redux";

const List = ({ match, sliceP, randomizeP, switchM, playlists, loadPlaylist, playlistLoaded, loadingErr, updatePLstate }) => {
  React.useEffect(() => {
    switchM(true);
    const savedlist = playlists.filter((e) => e.id === match.params.id && e);
    if (savedlist.length !== 0) {
      loadPlaylist(savedlist[0].list);
      sliceP();
      randomizeP();
      updatePLstate(true);
      switchM(false);
    } else {
      match.params.id && !playlistLoaded && downloadPlaylistData(match.params.id, "add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? <ResultsScreen currentID={match.params.id} /> : <Modal component={<LoadingPanel err={loadingErr} />} />;
};

const mapSTP = (state) => ({
  playlists: state.playlists,
  playlistLoaded: state.listloadstate.isLoaded,
  loadingErr: state.listloadstate.isError,
});

const mapDTP = (dispatch) => ({
  switchM: (e) => {
    dispatch(M.switchModal(e));
  },
  randomizeP: () => {
    dispatch(P.randomizePlaylist());
  },
  sliceP: () => {
    dispatch(P.slicePlaylist());
  },
  loadPlaylist: (e) => {
    dispatch(P.loadPlaylist(e));
  },
  updatePLstate: (e) => {
    dispatch(L.updatePLstate(e));
  },
});

export default connect(mapSTP, mapDTP)(List);
