import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import SearchBar from "../../components/SearchBar";
import PlaylistsShowcase from "../../modules/PlaylistsShowcase";

const SearchPage = () => {
  document.title = "YT Randomizer";
  const history = useHistory();
  const search = (playlistLink) => {
    const id = playlistLink.split("list=");
    history.push(`/list/${id[1]}`);
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{ height: "calc(100vh - 40px)" }}>
      <SearchBar search={search} />
      <PlaylistsShowcase />
    </Grid>
  );
};

export default SearchPage;
