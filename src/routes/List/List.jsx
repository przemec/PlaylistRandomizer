import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import Modal from "../../modules/Modal";
import * as P from "../../store/playlist/actions";
import * as M from "../../store/modal/actions";
import { connect } from "react-redux";

const List = ({ match, sliceP, randomizeP, loadP, switchM }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [loadingErr, loadErr] = React.useState(false);
  React.useEffect(() => {
    let pageToken = undefined;
    const search = (id) => {
      gapi.client.youtube.playlistItems
        .list({
          part: "snippet,contentDetails",
          maxResults: 50,
          playlistId: id,
          pageToken: pageToken,
        })
        .then(
          function (res) {
            loadP(res.result.items);
            if (res.result.nextPageToken) {
              pageToken = res.result.nextPageToken;
              search(id);
            } else {
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
    match.params.id && !playlistLoaded && search(match.params.id);
    switchM(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return playlistLoaded ? <ResultsScreen /> : <Modal component={<LoadingPanel err={loadingErr} />} />;
};

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
  loadP: (e) => {
    dispatch(P.loadPlaylist(e));
  },
});

export default connect(null, mapDTP)(List);
