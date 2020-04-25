/* global gapi */

import React from "react";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";

const App = () => {
  let [vids, updateVids] = React.useState([]);
  let [gapiReady, updateGapiState] = React.useState(false);
  let isPlaylistLoaded = false;
  let pageToken = undefined;
  const loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.onload = () => {
      gapi.load("client", () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load("youtube", "v3", () => {
          updateGapiState(true);
          console.log(
            gapi.client.youtube.channels.list({
              part: "snippet,contentDetails,statistics",
              id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            })
          );
        });
      });
    };
    document.body.appendChild(script);
  };
  const execute = () => {
    console.log("click");
    return gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: "PLkcsM8kKgr7Z6xpqX78ZgzEip4l96Sbux",
        pageToken: pageToken,
      })
      .then(
        function (response) {
          console.log("response");
          let vidsArr = vids;
          !isPlaylistLoaded && response.result.items.map((e) => vidsArr.push(e));
          updateVids(vidsArr);
          if (response.result.nextPageToken) {
            pageToken = response.result.nextPageToken;
            execute();
          } else isPlaylistLoaded = true;
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };
  React.useEffect(() => {
    loadYoutubeApi();
  });
  return gapiReady ? (
    <div>
      <button onClick={execute}>exec</button>
    </div>
  ) : (
    <div></div>
  );
};

export default App;
