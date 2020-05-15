import React from "react";
import { gapi } from "gapi-script";
import ResultsScreen from "../../modules/ResultsScreen";
import { Grid } from "@material-ui/core/";

const List = ({ match }) => {
  const [playlistLoaded, updatePLState] = React.useState(false);
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
          console.log(vidsArr);
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
          console.error("Execute error", err);
        }
      );
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100vh" }}>
      {!playlistLoaded && <></>}
      {playlistLoaded && <ResultsScreen songs={vids} />}
    </Grid>
  );
};

export default List;
