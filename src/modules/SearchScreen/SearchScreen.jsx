import React from "react";
import { Hidden } from "@material-ui/core/";
import * as S from "./style";
import SearchBar from "../../components/SearchBar";
import PlaylistsShowcase from "../../modules/PlaylistsShowcase";

const SearchPage = ({ search }) => (
  <>
    <Hidden smDown>
      <S.MainContainer>
        <S.ContentWrapper>
          <SearchBar search={search} ismobile={false} />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <PlaylistsShowcase ismobile={false} />
        </S.ContentWrapper>
      </S.MainContainer>
    </Hidden>
    <Hidden mdUp>
      <S.MainContainerMobile>
        <SearchBar search={search} ismobile={true} />
        <PlaylistsShowcase ismobile={true} />
      </S.MainContainerMobile>
    </Hidden>
  </>
);
export default SearchPage;
