import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import featuredlist from "../../assets/featuredPlaylists";
import PlaylistDisplay from "../../components/PlaylistDisplay";

const PlaylistsShowcase = ({ playlists }) => {
  const arr = playlists.map((e, i) => <PlaylistDisplay key={i} listData={e.listData} listId={e.id} />);
  const featured = featuredlist.map((e, i) => <PlaylistDisplay key={i} listData={e.listData} listId={e.id} />);
  console.log(arr);
  return (
    <S.MainWrapper id="playlists">
      <S.Title>Saved Playlists</S.Title>
      {arr.length > 0 ? arr : <S.Tip>Your playlists will be displayed here...</S.Tip>}
      {playlists.length <= 2 && (
        <>
          <S.Title>Featured Playlists</S.Title>
          {featured}
        </>
      )}
    </S.MainWrapper>
  );
};

const mapSTP = (state) => ({
  playlists: state.playlists,
});

const mapDTP = (dispatch) => ({
  //usuwanie konkretnych z zapisanych
  //usuwanie konkretnych z ulubionych
});

export default connect(mapSTP, mapDTP)(PlaylistsShowcase);
