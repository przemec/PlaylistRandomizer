import React from "react";
import { gapi } from "gapi-script";
import { TextField, Grid, Paper } from "@material-ui/core/";
import * as S from "./style";

const SearchBar = ({ search }) => {
  const [playlistLink, setLink] = React.useState("https://www.youtube.com/playlist?list=PLkcsM8kKgr7Z6xpqX78ZgzEip4l96Sbux");
  return (
    <S.StyledPaper>
      <S.FullHeight container direction="row" justify="center" alignItems="center">
        <S.TextFieldCont item>
          <TextField fullWidth value={playlistLink} onChange={(e) => setLink(e.target.value)} label="Playlist Link" />
        </S.TextFieldCont>
        <S.SearchCont item>
          <S.StyledArrow onClick={() => search(playlistLink)} />
        </S.SearchCont>
      </S.FullHeight>
    </S.StyledPaper>
  );
};

export default SearchBar;
