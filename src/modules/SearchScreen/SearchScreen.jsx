import React from "react";
import { connect } from "react-redux";
import { Grid, Hidden } from "@material-ui/core/";
import SearchBar from "../../components/SearchBar";
import PlaylistsShowcase from "../../modules/PlaylistsShowcase";

const SearchPage = ({ search }) => {
  return (
    <>
      <Hidden xsDown>
        <Grid container direction="row" justify="space-around" alignItems="center" style={{ height: "calc(100vh - 40px)" }}>
          <SearchBar search={search} />
          <PlaylistsShowcase />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container direction="row" justify="space-around" alignItems="center" style={{ height: "calc(100vh - 40px)" }}>
          <SearchBar search={search} />
          <PlaylistsShowcase />
        </Grid>
      </Hidden>
    </>
  );
};

const mapDTP = (dispatch) => ({
  updatePLstate: (e) => {
    // dispatch(L.updatePLstate(e));
  },
});

export default connect(null, mapDTP)(SearchPage);
