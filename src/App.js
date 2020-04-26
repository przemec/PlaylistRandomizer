import React from "react";
import { gapi } from "gapi-script";
import SearchBar from "./components/SearchBar";
import ResultsGroup from "./modules/ResultsGroup";
import { Grid } from "@material-ui/core/";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";

const App = () => {
  let [gapiReady, updateGapiState] = React.useState(false);
  let [playlistLoaded, updatePLState] = React.useState(false);
  const [vids, updateVids] = React.useState([]);
  let pageToken = undefined;
  let isPlaylistLoaded = false;
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
    // console.log("id", id[1]);
    // console.log("plaps", playlistLink);
    // setLink(id);
    console.log(vids);
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
          !isPlaylistLoaded && response.result.items.map((e) => vidsArr.push(e));
          updateVids(vidsArr);
          if (response.result.nextPageToken) {
            pageToken = response.result.nextPageToken;
            search(playlistLink);
          } else {
            updatePLState(true);
            isPlaylistLoaded = true;
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
        {playlistLoaded && <ResultsGroup songs={vids} />}
      </Grid>
    )
  );
};

export default App;
