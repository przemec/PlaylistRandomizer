import React from "react";
import ResultsGroup from "../../modules/ResultsGroup";

const ResultsScreen = ({ songs }) => {
  const [player, setPlayer] = React.useState(0);
  const onPlayerReady = (e) => {
    let arr = [];
    songs.map((ev) => {
      arr.push(ev.snippet.resourceId.videoId);
    });
    e.target.loadPlaylist(arr);
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
      <ResultsGroup songs={songs} changeSong={playSong} />
    </>
  );
};

export default ResultsScreen;
