import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import LoadingError from "../../components/LoadingError";
import { loadPlaylist, randomizePlaylist } from "../../store/actions";
import { store } from "../../store";

const List = ({ match }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [loadingErr, loadErr] = React.useState(false);
  let pageToken = undefined;
  React.useEffect(() => {
    match.params.id && !playlistLoaded && search(match.params.id);
  });
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
            store.dispatch(randomizePlaylist());
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
  if (playlistLoaded) return <ResultsScreen />;
  else if (loadingErr) return <LoadingError />;
  else return <LoadingPanel />;
};

export default List;
