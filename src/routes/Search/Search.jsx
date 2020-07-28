import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as L from "../../store/listloadstate/actions";
import { Grid } from "@material-ui/core/";
import SearchBar from "../../components/SearchBar";
import PlaylistsShowcase from "../../modules/PlaylistsShowcase";

const SearchPage = ({ updatePLstate }) => {
  React.useEffect(() => {
    document.title = "YT Randomizer";
    window.YT = undefined;
    window.onYouTubeIframeAPIReady = undefined;
    updatePLstate(false);
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
  return (
    <Grid container direction="row" justify="space-around" alignItems="center" style={{ height: "calc(100vh - 40px)" }}>
      <SearchBar search={search} />
      <PlaylistsShowcase />
    </Grid>
  );
};

const mapDTP = (dispatch) => ({
  updatePLstate: (e) => {
    dispatch(L.updatePLstate(e));
  },
});

export default connect(null, mapDTP)(SearchPage);
