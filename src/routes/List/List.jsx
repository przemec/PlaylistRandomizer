import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import Modal from "../../modules/Modal";
import * as PS from "../../store/playlists/actions";
import * as P from "../../store/playlist/actions";
import * as M from "../../store/modal/actions";
import { connect } from "react-redux";

const List = ({ match, addPlaylist, sliceP, randomizeP, loadPart, switchM, playlists, loadPlaylist }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [loadingErr, loadErr] = React.useState(false);
  React.useEffect(() => {
    let pageToken = undefined;
    let listt = [];
    const savedlist = playlists.filter((e) => e.id === match.params.id && e);
    const search = (id) => {
      !pageToken &&
        gapi.client.youtube.playlists
          .list({
            part: "snippet",
            id: id,
          })
          .then(
            function (res) {
              console.log(res.result);
            },
            function (err) {
              if (err.result.error.code === (404 || 403)) {
                loadErr(true);
              }
            }
          );
      gapi.client.youtube.playlistItems
        .list({
          part: "snippet,contentDetails",
          maxResults: 50,
          playlistId: id,
          pageToken: pageToken,
        })
        .then(
          function (res) {
            loadPart(res.result.items);
            res.result.items.map((e) => (listt = [...listt, e]));
            if (res.result.nextPageToken) {
              pageToken = res.result.nextPageToken;
              search(id);
            } else {
              addPlaylist(id, listt);
              sliceP();
              randomizeP();
              updatePLState(true);
              switchM(false);
            }
          },
          function (err) {
            if (err.result.error.code === (404 || 403)) {
              loadErr(true);
            }
          }
        );
    };
    if (savedlist.length !== 0) {
      loadPlaylist(savedlist.list);
      sliceP();
      randomizeP();
      updatePLState(true);
      switchM(false);
    } else {
      match.params.id && !playlistLoaded && search(match.params.id);
    }
    switchM(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? <ResultsScreen /> : <Modal component={<LoadingPanel err={loadingErr} />} />;
};

const mapSTP = (state) => ({
  playlists: state.playlists,
});

const mapDTP = (dispatch) => ({
  switchM: (e) => {
    dispatch(M.switchModal(e));
  },
  addPlaylist: (id, list) => {
    dispatch(PS.addPlaylist(id, list));
  },
  randomizeP: () => {
    dispatch(P.randomizePlaylist());
  },
  sliceP: () => {
    dispatch(P.slicePlaylist());
  },
  loadPart: (e) => {
    dispatch(P.loadPart(e));
  },
  loadPlaylist: (e) => {
    dispatch(P.loadPlaylist(e));
  },
});

export default connect(mapSTP, mapDTP)(List);
