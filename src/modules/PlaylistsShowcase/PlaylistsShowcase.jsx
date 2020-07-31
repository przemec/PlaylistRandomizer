import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import featuredlist from "../../assets/featuredPlaylists";
import PlaylistDisplay from "../../components/PlaylistDisplay";

const PlaylistsShowcase = ({ playlists, ismobile }) => {
  const favs = playlists.map(
    (e, i) => e.isFav && <PlaylistDisplay key={i} listData={e.listData} listId={e.id} isFav={e.isFav} type="saved" />
  );
  const rest = playlists.map(
    (e, i) => !e.isFav && <PlaylistDisplay key={i} listData={e.listData} listId={e.id} isFav={e.isFav} type="saved" />
  );
  const featured = featuredlist.map((e, i) => (
    <PlaylistDisplay key={i} listData={e.listData} listId={e.id} isFav={e.isFav} type="featured" />
  ));
  return (
    <S.MainWrapper id="playlists" ismobile={ismobile ? 1 : 0}>
      <S.Title>Saved Playlists</S.Title>
      {playlists.length > 0 ? (
        <>
          {favs}
          {rest}
        </>
      ) : (
        <S.Tip>Your playlists will be displayed here...</S.Tip>
      )}
      <S.Title>Featured Playlists</S.Title>
      {featured}
    </S.MainWrapper>
  );
};

const mapSTP = (state) => ({
  playlists: state.playlists,
});

export default connect(mapSTP)(PlaylistsShowcase);
