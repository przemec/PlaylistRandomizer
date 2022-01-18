import React from "react";
import { connect } from "react-redux";
import PlaylistInfo from "../../../PlaylistInfo"
import * as S from "./style";
import { default as Songs } from "../../../../modules/ResultsGroup";

const ListDetailsPage = ({ playlistId, playlists, resizeref, playlistLoadState }) => {
  let [firstRender, setFirstRender] = React.useState(true);
  React.useEffect(() => {
    setFirstRender(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listdetails = playlists.find((e) => e.id === playlistId);
  const { list } = listdetails;
  return (
    <S.Container ref={resizeref()}>
      {!firstRender ? (
        <>
          {playlistLoadState !== "refreshing_details" ? (
            <PlaylistInfo listdetails={listdetails}/>
          ) : (
            <S.LoopIconWrapper>
              <S.LoopIco />
            </S.LoopIconWrapper>
          )}
          <S.SongsWrapper id={"songs-time-wrapper"}>
            <Songs songs={list} displaytype={"details"} />
          </S.SongsWrapper>
        </>
      ) : (
        <S.LoopIconWrapper>
          <S.LoopIco />
        </S.LoopIconWrapper>
      )}
    </S.Container>
  );
};

const mapSTP = (state) => ({
  playlistId: state.modal.playlist,
  playlists: state.playlists,
  playlistLoadState: state.loadstate.isPlaylistLoaded,
});

export default connect(mapSTP)(ListDetailsPage);
