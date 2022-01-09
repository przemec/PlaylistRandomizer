import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import formatTime from "../../../../helpers/TimeFormat";
import { default as Songs } from "../../../../modules/ResultsGroup";
import Tooltip from "../../../../helpers/Tooltip";
import MusicOff from "@material-ui/icons/MusicOff";
import QueueMusic from "@material-ui/icons/QueueMusic";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";

const ListDetailsPage = ({ playlistId, playlists, resizeref }) => {
  let [timeDisplay, setTimeDisplay] = React.useState(false);
  let [songsDisplay, setSongsDisplay] = React.useState(false);

  const listdetails = playlists.find((e) => e.id === playlistId);
  const {
    updated: refresh,
    listData: { author, thumbnail, title, publishedAt, length },
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
          <S.Info>Author: {author}</S.Info>
          <S.Info>{title}</S.Info>
          <S.Info>Creation date: {creationDateFormatted}</S.Info>
          <S.Info>Playlist length: {formatTime(length)}</S.Info>
          <S.Info>Last refresh: {refreshFormatted}</S.Info>
          <S.Info>Number of videos: {list.length}</S.Info>
        </S.ListInfo>
      </S.InfoWrapper>
      <S.IconsContainer>
        {songsDisplay && (
          <Tooltip title={`${timeDisplay ? "Hide" : "Show"} times for each video`} placement="top">
            <S.IconWrapper
              onClick={() => {
                var timeDivs = document.querySelectorAll(".time");
                timeDivs.forEach((e) => {
                  e.style.display = timeDisplay ? "none" : "block";
                });
                setTimeDisplay(!timeDisplay);
              }}
            >
              {timeDisplay ? <HighlightOffRoundedIcon /> : <AccessTimeRoundedIcon />}
            </S.IconWrapper>
          </Tooltip>
        )}
        <Tooltip title={`${songsDisplay ? "Hide" : "Show"} full list of videos`} placement="top">
          <S.IconWrapper
            onClick={() => {
              if (songsDisplay) {
                getElementStyleById("songs-time-wrapper").height = "0";
                getElementStyleById("resizable-wrap").width = "";
                getElementStyleById("songs-time-wrapper").width = "0";
              } else {
                getElementStyleById("songs-time-wrapper").height = "60vh";
                getElementStyleById("resizable-wrap").width = "90vw";
                getElementStyleById("songs-time-wrapper").width = "90vw";
              }
              setSongsDisplay(!songsDisplay);
            }}
          >
            {songsDisplay ? <MusicOff /> : <QueueMusic />}
          </S.IconWrapper>
        </Tooltip>
      </S.IconsContainer>
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
