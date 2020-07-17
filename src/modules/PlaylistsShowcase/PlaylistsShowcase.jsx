import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import PlaylistDisplay from "../../components/PlaylistDisplay";

const PlaylistsShowcase = ({ playlists }) => {
  let arr = playlists.map((e, i) => <PlaylistDisplay key={i} listData={e.listData} listId={e.id} />);
  return <S.MainWrapper id="playlists">{arr}</S.MainWrapper>;
};

const mapSTP = (state) => ({
  playlists: state.playlists,
});

const mapDTP = (dispatch) => ({
  //usuwanie konkretnych z zapisanych
  //usuwanie konkretnych z ulubionych
});

export default connect(mapSTP, mapDTP)(PlaylistsShowcase);
