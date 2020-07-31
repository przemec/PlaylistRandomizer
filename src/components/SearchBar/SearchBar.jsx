import React from "react";
import * as S from "./style";

const SearchBar = ({ search, ismobile }) => {
  const [playlistLink, setLink] = React.useState("");
  const searchEnter = (event) => {
    if (event.key === "Enter") {
      playlistLink && search(playlistLink);
    }
  };
  return (
    <S.MainWrapper ismobile={ismobile ? 1 : 0}>
      <S.FullHeight container direction="row" justify="center" alignItems="center">
        <S.TextFieldCont item>
          <S.StyledTextField
            fullWidth
            value={playlistLink}
            onChange={(e) => setLink(e.target.value)}
            label="Playlist Link"
            onKeyPress={searchEnter}
          />
        </S.TextFieldCont>
        <S.SearchCont item>
          <S.StyledArrow onClick={() => playlistLink && search(playlistLink)} />
        </S.SearchCont>
      </S.FullHeight>
    </S.MainWrapper>
  );
};

export default SearchBar;
