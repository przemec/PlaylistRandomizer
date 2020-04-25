import React from "react";
import { gapi } from "gapi-script";

const SingleResult = () => {
  let [vids, updateVids] = React.useState([]);
  let pageToken = undefined;
  let isPlaylistLoaded = false;
  const execute = () => {
    console.log(vids);
    gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: "PLkcsM8kKgr7Z6xpqX78ZgzEip4l96Sbux",
        pageToken: pageToken,
      })
      .then(
        function (response) {
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
  return <button onClick={execute}>exec</button>;
};

export default SingleResult;
