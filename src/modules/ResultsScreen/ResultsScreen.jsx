import React from "react";
import ResultsGroup from "../../modules/ResultsGroup";

const ResultsScreen = ({ songs, id, changeSong }) => {
  const [player, setPlayer] = React.useState(undefined);
  const onPlayerReady = (e) => {
    console.log("onPlayerReady");
    e.target.playVideo();
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
        videoId: id,
        events: {
          onReady: () => onPlayerReady,
        },
      })
    );
  };
  const playSong = (id) => {
    player.loadVideoById(id);
    changeSong(id);
  };
  return (
    <>
      <div id="youtube-player" />
      <ResultsGroup songs={songs} changeSong={playSong} />
    </>
  );
};

export default ResultsScreen;
