import React from "react";
import SearchBar from "../../components/SearchBar";
import { Grid } from "@material-ui/core/";
import { useHistory } from "react-router-dom";

const SearchPage = () => {
  const history = useHistory();
  const search = (playlistLink) => {
    const id = playlistLink.split("list=");
    history.push(`/list/${id[1]}`);
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{ height: "100vh" }}>
      <SearchBar search={search} />
    </Grid>
  );
};

export default SearchPage;