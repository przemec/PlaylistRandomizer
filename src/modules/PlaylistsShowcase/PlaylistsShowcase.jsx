import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import M from "../../assets/apiYT";

const PlaylistsShowcase = ({ type, playlists }) => {
  let arr;
  let title;
  switch (type) {
    case "saved":
      title = "Saved Playlists";
      arr = playlists.map((e, i) => (
        <div key={i} onClick={() => M(e.id, "refresh")}>
          {JSON.stringify(e.id)}
        </div>
      ));
      break;
    case "fav":
      title = "Favourite Playlists";
      arr = playlists.map((e, i) => <div key={i}>{JSON.stringify(e.id)}</div>);
      break;
    case "last":
      title = "Last Played";
      arr = playlists.map((e, i) => <div key={i}>{JSON.stringify(e.id)}</div>);
      break;
    default:
      break;
  }
  return (
    <S.MainWrapper id="songlist">
      {title}
      {arr}
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
