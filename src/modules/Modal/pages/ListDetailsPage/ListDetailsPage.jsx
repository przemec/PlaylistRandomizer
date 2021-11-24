import React from "react";
import * as S from "./style";
import { connect } from "react-redux";
import { default as Songs } from "../../../../modules/ResultsGroup";
import Tooltip from "../../../../helpers/Tooltip";
import MusicOff from "@material-ui/icons/MusicOff";
import QueueMusic from "@material-ui/icons/QueueMusic";

const ListDetailsPage = ({ playlistId, playlists }) => {
  const listdetails = playlists.find((e) => e.id === playlistId);
  const {
    updated: refresh,
    listData: { author, thumbnail, title, publishedAt },
  } = listdetails;
  const creationDate = publishedAt.split("T")[0].split("-");
  const creationDateFormatted = `${creationDate[2]}/${creationDate[1]}/${creationDate[0]}`;
  const refreshFormatted = refresh.split(",")[0];
  return (
    <S.Container>
      <S.InfoWrapper>
        <S.Thumbnail src={thumbnail} loading="lazy" alt="[Error loading thumbnail]" />
        <S.ListInfo>
          <S.Info>{title}</S.Info>
          <S.Info>Author: {author}</S.Info>
          <S.Info>Playlist length: {"000:00:00"}</S.Info>
          <S.Info>Creation date: {creationDateFormatted}</S.Info>
          <S.Info>Last refresh: {refreshFormatted}</S.Info>
        </S.ListInfo>
        <Tooltip title="Toggle songs display" placement="top">
          <>
            <S.IconWrapper
              onClick={() => {
                document.getElementById("turnOffSongs").style.display = "block";
                document.getElementById("songs-time-wrapper").style.height = "60vh";
                document.getElementById("turnOnSongs").style.display = "none";
              }}
              id={"turnOnSongs"}
            >
              <QueueMusic />
            </S.IconWrapper>
            <S.IconWrapper
              onClick={() => {
                document.getElementById("turnOnSongs").style.display = "block";
                document.getElementById("songs-time-wrapper").style.height = "0";
                document.getElementById("turnOffSongs").style.display = "none";
              }}
              id={"turnOffSongs"}
              style={{ display: "none" }}
            >
              <MusicOff />
            </S.IconWrapper>
          </>
        </Tooltip>
      </S.InfoWrapper>
      <S.SongsWrapper id={"songs-time-wrapper"}>
        <Songs songs={listdetails.list} displayType={"details"} />
      </S.SongsWrapper>
    </S.Container>
  );
};

const mapSTP = (state) => ({
  playlistId: state.modal.playlist,
  playlists: state.playlists,
});

export default connect(mapSTP)(ListDetailsPage);
