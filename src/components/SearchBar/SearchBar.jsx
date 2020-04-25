import React from "react";
import { gapi } from "gapi-script";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [playlistLink, setLink] = React.useState("");
  const [vids, updateVids] = React.useState([]);
  let pageToken = undefined;
  let isPlaylistLoaded = false;
  const search = () => {
    const id = playlistLink.split("list=");
    console.log("id", id[1]);
    console.log("plaps", playlistLink);
    setLink(id);
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
            search();
          } else isPlaylistLoaded = true;
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };
  return (
    <>
      <TextField value={playlistLink} onChange={(e) => setLink(e.target.value)} label="Playlist Link" />
      <SearchIcon onClick={search} />
    </>
  );
};

export default SearchBar;
