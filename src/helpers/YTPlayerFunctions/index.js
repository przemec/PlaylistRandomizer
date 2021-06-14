import { store } from "../../store";
import * as L from "../../store/loadstate/actions";
import * as P from "../../store/playlist/actions";
import * as PL from "../../store/player/actions";
import * as RP from "../../store/resumableplaylists/actions";

const scrollToActive = (i, p) => {
  const state = store.getState();
  let elmnt = document.getElementById(`index${(i || state.playlist.index) + (p || state.playlist.page) * 200}`);
  if (elmnt && state.settings.autoscroll) {
    elmnt.parentNode.scrollTop = elmnt.offsetTop - elmnt.parentNode.offsetTop;
  }
};

export const onPlayerReady = (isresumed) => {
  const state = store.getState();
  let {
    resumableplaylists,
    playlist: { id },
  } = state;
  const dispatch = store.dispatch;
  dispatch(L.setPlayerState(true));
  document.getElementById("youtube-player-wrapper").style.visibility = "visible";
  if (!isresumed) {
    dispatch(P.switchPage(0));
  } else {
    const newdata = resumableplaylists.filter((e) => e.id === id)[0];
    dispatch(P.switchIndex(newdata.index));
    dispatch(P.switchPage(newdata.page));
    // const arr = songs[newdata.page].map((ev) => ev.videoId);
    // e.target.cuePlaylist(arr, newdata.index);
    scrollToActive(newdata.index, newdata.page);
  }
};

export const onPlayerStateChange = (e, nextpage, checkprivvids) => {
  const dispatch = store.dispatch;
  if (e.target.getPlayerState() === 0) {
    dispatch(P.switchIndex(e.target.getPlaylistIndex()));
    e.target.getVideoUrl().split("=")[1].length < 8 && nextpage && nextpage(true);
  } else if (e.target.getPlayerState() === -1) {
    dispatch(P.switchIndex(e.target.getPlaylistIndex()));
  } else if (e.target.getPlayerState() === 5) {
    e.target.playVideo();
  }
};

export const resetPlayer = (create, isresumed, nextpage, checkprivvids) => {
  const state = store.getState();
  let {
    playlist: { id, list },
  } = state;
  const dispatch = store.dispatch;
  if (!create) {
    dispatch(PL.clearPlayer());
    dispatch(RP.savePlaylist(id, list, 0, 0));
    window.YT = undefined;
    window.onYouTubeIframeAPIReady = undefined;
    let c = [...document.getElementsByTagName("script")];
    // eslint-disable-next-line array-callback-return
    c.map((e) => {
      e.src === "https://www.youtube.com/iframe_api" && e.remove();
    });
    dispatch(P.switchPage(-1));
  }
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
    dispatch(PL.setPlayer(
      new window.YT.Player("youtube-player", {
        events: {
          onReady: () => onPlayerReady(isresumed),
          onStateChange: (e) => onPlayerStateChange(e, nextpage, checkprivvids),
        },
      })
    ));
  };
};
