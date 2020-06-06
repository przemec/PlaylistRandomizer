import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import Modal from "../../modules/Modal";
import { loadPlaylist, slicePlaylist, randomizePlaylist, switchModal } from "../../store/actions";
import { store } from "../../store";

const List = ({ match }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [loadingErr, loadErr] = React.useState(false);
  let pageToken = undefined;
  React.useEffect(() => {
    match.params.id && !playlistLoaded && search(match.params.id);
    store.dispatch(switchModal(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const search = (id) => {
    gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: id,
        pageToken: pageToken,
      })
      .then(
        function (response) {
          store.dispatch(loadPlaylist(response.result.items));
          if (response.result.nextPageToken) {
            pageToken = response.result.nextPageToken;
            search(id);
          } else {
            store.dispatch(slicePlaylist());
            store.dispatch(randomizePlaylist());
            store.dispatch(switchModal(false));
            updatePLState(true);
          }
        },
        function (err) {
          if (err.result.error.code === (404 || 403)) {
            loadErr(true);
          }
        }
      );
  };
  return playlistLoaded ? <ResultsScreen /> : <Modal component={<LoadingPanel err={loadingErr} />} />;
};

export default List;
