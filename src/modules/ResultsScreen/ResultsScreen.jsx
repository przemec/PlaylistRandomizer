import React from "react";
import ResultsGroup from "../../modules/ResultsGroup";
import { Grid } from "@material-ui/core";

const ResultsScreen = ({ songs }) => {
  const [player, setPlayer] = React.useState();
  const [currentIndex, updateIndex] = React.useState(0);
  const onPlayerReady = (e) => {
    const arr = songs.map((ev) => ev.snippet.resourceId.videoId);
    e.target.loadPlaylist(arr);
    const that = e.target;
    setTimeout(() => {
      that.stopVideo();
    }, 1000);
  };
  const onPlayerStateChange = (e) => {
    updateIndex(e.target.getPlaylistIndex());
    document.title = songs[e.target.getPlaylistIndex()].snippet.title;
    let elmnt = document.getElementById(songs[e.target.getPlaylistIndex()].snippet.resourceId.videoId);
    elmnt.scrollIntoView();
  };
  if (!window.YT) {
    let c = document.getElementsByTagName("script").length;
    let m = true;
    for (let i = 0; i < c; i++) {
      document.getElementsByTagName("script")[i].src === "https://www.youtube.com/iframe_api" && (m = false);
    }
    if (m) {
      let tag = document.createElement("script");
      tag.onload = () => console.log("YOUTUBE IFRAME API LOADED");
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  window.onYouTubeIframeAPIReady = () => {
    setPlayer(
      new window.YT.Player("youtube-player", {
        height: "315",
        width: "560",
        videoId: songs[0].snippet.resourceId.videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };
  const playSong = (index) => {
    player.playVideoAt(index);
  };
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item container xs={12} lg={5} justify="center" alignItems="center">
        <div id="youtube-player" />
      </Grid>
      <Grid item container xs={12} lg={7} justify="center" alignItems="center">
        <ResultsGroup songs={songs} changeSong={playSong} currentIndex={currentIndex} />
      </Grid>
    </Grid>
  );
};

export default ResultsScreen;
