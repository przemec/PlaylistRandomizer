import React from "react";
import { connect } from "react-redux";
import { Hidden } from "@material-ui/core/";
import * as S from "./style";
import SearchBar from "../../components/SearchBar";
import PlaylistsShowcase from "../../modules/PlaylistsShowcase";

const SearchPage = ({ search, playlists, displayfeatured }) => {
  const isShowcaseVisible = playlists.length !== 0 || displayfeatured;
  const isShowcaseShort = (playlists.length <= 3 && !displayfeatured) || (playlists.length === 0 && displayfeatured) ? 1 : 0;
  return (
    <>
      <Hidden smDown>
        <S.MainContainer isshowcaseshort={isShowcaseShort}>
          <S.ContentWrapper isshowcaseshort={isShowcaseShort}>
            <SearchBar search={search} ismobile={false} />
          </S.ContentWrapper>
          {isShowcaseVisible && (
            <S.ContentWrapper isshowcaseshort={isShowcaseShort}>
              <PlaylistsShowcase ismobile={false} />
            </S.ContentWrapper>
          )}
        </S.MainContainer>
      </Hidden>
      <Hidden mdUp>
        <S.MainContainerMobile>
          <SearchBar search={search} ismobile={true} />
          {isShowcaseVisible && <PlaylistsShowcase ismobile={true} />}
        </S.MainContainerMobile>
      </Hidden>
    </>
  );
};

const mapSTP = (state) => ({
  playlists: state.playlists,
  displayfeatured: state.settings.displayfeatured,
});

export default connect(mapSTP)(SearchPage);
