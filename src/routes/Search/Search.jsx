import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as L from "../../store/loadstate/actions";
import * as P from "../../store/playlist/actions";
import SearchScreen from "../../modules/SearchScreen";

const SearchPage = ({ setPlaylistState, clearPlaylist }) => {
  React.useEffect(() => {
    clearPlaylist();
    document.title = "YT Randomizer";
    window.YT = undefined;
    window.onYouTubeIframeAPIReady = undefined;
    setPlaylistState(false);
    document.getElementById("list-container").style.display = "none";
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
  clearPlaylist: () => dispatch(P.clearPlaylist()),
});

export default connect(null, mapDTP)(SearchPage);
