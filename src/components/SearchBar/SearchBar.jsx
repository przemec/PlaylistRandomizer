import React from "react";
import * as S from "./style";

const SearchBar = ({ search }) => {
  const [playlistLink, setLink] = React.useState("");
  return (
    <S.StyledPaper>
      <S.FullHeight container direction="row" justify="center" alignItems="center">
        <S.TextFieldCont item>
          <S.StyledTextField fullWidth value={playlistLink} onChange={(e) => setLink(e.target.value)} label="Playlist Link" />
        </S.TextFieldCont>
        <S.SearchCont item>
          <S.StyledArrow onClick={() => playlistLink && search(playlistLink)} />
        </S.SearchCont>
      </S.FullHeight>
    </S.StyledPaper>
  );
};

export default SearchBar;
