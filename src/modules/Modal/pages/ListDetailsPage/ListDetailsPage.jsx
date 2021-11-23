import React from "react";
import * as S from "./style";
import { connect } from "react-redux";
import ResultsGroup from "../../../../modules/ResultsGroup";

const ListDetailsPage = ({ playlistId, playlists }) => {
  const savedlist = playlists.find((e) => e.id === playlistId);
  return (
    <S.Wrapper>
      <ResultsGroup songs={savedlist.list} displayType={"details"} />
    </S.Wrapper>
  );
};

const mapSTP = (state) => ({
  playlistId: state.modal.playlist,
  playlists: state.playlists,
});

export default connect(mapSTP)(ListDetailsPage);
