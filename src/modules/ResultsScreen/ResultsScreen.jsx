import React from "react";
import ResultsGroup from "../../modules/ResultsGroup";

const ResultsScreen = ({ songs }) => {
  const [player, setPlayer] = React.useState();
  const [currentIndex, updateIndex] = React.useState(0);
  const onPlayerReady = (e) => {
    const arr = songs.map((ev) => ev.snippet.resourceId.videoId);
    e.target.loadPlaylist(arr);
  };
  const onPlayerStateChange = (e) => {
    updateIndex(e.target.getPlaylistIndex());
    document.title = songs[e.target.getPlaylistIndex()].snippet.title;
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
    <>
      <div id="youtube-player" />
      <ResultsGroup songs={songs} changeSong={playSong} currentIndex={currentIndex} />
    </>
  );
};

export default ResultsScreen;
