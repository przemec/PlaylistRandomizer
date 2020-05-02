import React from "react";
import { gapi } from "gapi-script";
import SearchBar from "./components/SearchBar";
import ResultsScreen from "./modules/ResultsScreen";
import { Grid } from "@material-ui/core/";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";

const App = () => {
  const [gapiReady, updateGapiState] = React.useState(false);
  const [playlistLoaded, updatePLState] = React.useState(false);
  const [vids, updateVids] = React.useState([]);
  let pageToken = undefined;
  const loadYoutubeApi = () => {
    gapi.load("client", () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client.load("youtube", "v3", () => {
        updateGapiState(true);
      });
    });
  };
  React.useEffect(() => {
    loadYoutubeApi();
  });
  const search = (playlistLink) => {
    const id = playlistLink.split("list=");
    gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: id[1],
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
            search(playlistLink);
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
    gapiReady && (
      <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100vh" }}>
        {!playlistLoaded && <SearchBar search={search} />}
        {playlistLoaded && <ResultsScreen songs={vids} />}
      </Grid>
    )
  );
};

export default App;
