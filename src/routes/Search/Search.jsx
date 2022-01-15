import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as L from "../../store/loadstate/actions";
import * as P from "../../store/playlist/actions";
import { clearPlayer } from "../../store/player/actions";
import SearchScreen from "../../modules/SearchScreen";

const SearchPage = ({ destroyPlayer, clearPlaylist, setPlaylistState, setPlayerState }) => {
  React.useEffect(() => {
    destroyPlayer();
    clearPlaylist();
    document.title = "YT Randomizer";
    window.YT = undefined;
    window.onYouTubeIframeAPIReady = undefined;
    setPlaylistState(false);
    setPlayerState(false);
    document.getElementById("list-container").style.display = "none";
    document.getElementById("youtube-player-wrapper").style.visibility = "hidden";
    let c = [...document.getElementsByTagName("script")];
    // eslint-disable-next-line array-callback-return
    c.map((e) => {
      e.src === "https://www.youtube.com/iframe_api" && e.remove();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();
  const search = (playlistLink) => {
    const id = playlistLink.split("list=");
    history.push(`/list/${id[1]}`);
  };
  return <SearchScreen search={search} />;
};

const mapDTP = (dispatch) => ({
  setPlaylistState: (e) => dispatch(L.setPlaylistState(e)),
  setPlayerState: (e) => dispatch(L.setPlayerState(e)),
  clearPlaylist: () => dispatch(P.clearPlaylist()),
  destroyPlayer: () => dispatch(clearPlayer()),
});

export default connect(null, mapDTP)(SearchPage);
