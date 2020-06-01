import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import LoadingPanel from "../../components/LoadingPanel";
import LoadingError from "../../components/LoadingError";

const List = ({ match }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [loadingErr, loadErr] = React.useState(false);
  const [vids, updateVids] = React.useState([]);
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
          let vidsArr = vids;
          response.result.items.map((e) => vidsArr.push(e));
          updateVids(vidsArr);
          if (response.result.nextPageToken) {
            pageToken = response.result.nextPageToken;
            search(id);
          } else {
            vidsArr.sort(() => Math.random() - 0.5);
            updateVids(vidsArr);
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
  if (playlistLoaded) return <ResultsScreen songs={vids} />;
  else if (loadingErr) return <LoadingError />;
  else return <LoadingPanel />;
};

export default List;
