import React from "react";
import * as S from "./style";
import { connect } from "react-redux";
import { default as Songs } from "../../../../modules/ResultsGroup";
import Tooltip from "../../../../helpers/Tooltip";
import MusicOff from "@material-ui/icons/MusicOff";
import QueueMusic from "@material-ui/icons/QueueMusic";

const ListDetailsPage = ({ playlistId, playlists, resizeref }) => {
  const listdetails = playlists.find((e) => e.id === playlistId);
  const {
    updated: refresh,
    listData: { author, thumbnail, title, publishedAt },
    list,
  } = listdetails;
  const creationDate = publishedAt.split("T")[0].split("-");
  const creationDateFormatted = `${creationDate[2]}/${creationDate[1]}/${creationDate[0]}`;
  const refreshFormatted = refresh.split(",")[0];
  let getElementStyleById = (id) => document.getElementById(id).style;
  return (
    <S.Container ref={resizeref()}>
      <S.InfoWrapper>
        <S.Thumbnail src={thumbnail} loading="lazy" alt="[Error loading thumbnail]" />
        <S.ListInfo>
          <S.Info>{title}</S.Info>
          <S.Info>Author: {author}</S.Info>
          <S.Info>Playlist length: {"000:00:00"}</S.Info>
          <S.Info>Number of videos: {list.length}</S.Info>
          <S.Info>Creation date: {creationDateFormatted}</S.Info>
          <S.Info>Last refresh: {refreshFormatted}</S.Info>
        </S.ListInfo>
      </S.InfoWrapper>
      <Tooltip title="Toggle songs display" placement="top">
        <S.IconsContainer>
          <S.IconWrapper
            onClick={() => {
              getElementStyleById("turnOffSongs").display = "block";
              getElementStyleById("songs-time-wrapper").height = "60vh";
              getElementStyleById("resizable-wrap").width = "90vw";
              getElementStyleById("songs-time-wrapper").width = "90vw";
              getElementStyleById("turnOnSongs").display = "none";
            }}
            id={"turnOnSongs"}
          >
            <QueueMusic />
          </S.IconWrapper>
          <S.IconWrapper
            onClick={() => {
              getElementStyleById("turnOnSongs").display = "block";
              getElementStyleById("songs-time-wrapper").height = "0";
              getElementStyleById("resizable-wrap").width = "";
              getElementStyleById("songs-time-wrapper").width = "0";
              getElementStyleById("turnOffSongs").display = "none";
            }}
            id={"turnOffSongs"}
            style={{ display: "none" }}
          >
            <MusicOff />
          </S.IconWrapper>
        </S.IconsContainer>
      </Tooltip>
      <S.SongsWrapper id={"songs-time-wrapper"}>
        <Songs songs={list} displayType={"details"} />
      </S.SongsWrapper>
    </S.Container>
  );
};

const mapSTP = (state) => ({
  playlistId: state.modal.playlist,
  playlists: state.playlists,
});

export default connect(mapSTP)(ListDetailsPage);
