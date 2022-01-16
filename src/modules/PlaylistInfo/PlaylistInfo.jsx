import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import downloadPlaylistData from "../../assets/apiYT";
import formatTime from "../../helpers/TimeFormat";
import Tooltip from "../../helpers/Tooltip";
import MusicOff from "@material-ui/icons/MusicOff";
import QueueMusic from "@material-ui/icons/QueueMusic";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";

const PlaylistInfo = ({  playlistId, playlistLoadState, listdetails }) => {
  let [timeDisplay, setTimeDisplay] = React.useState(false);
  let [songsDisplay, setSongsDisplay] = React.useState(false);
  const {
    updated: refresh,
    listData: { author, thumbnail, title, publishedAt, length },
    list,
  } = listdetails;
  const creationDate = publishedAt?.split("T")[0].split("-");
  const creationDateFormatted = `${creationDate?.[2]}/${creationDate?.[1]}/${creationDate?.[0]}`;
  const refreshFormatted = refresh.split(",")[0];
  React.useEffect(() => {
    if (getElementStyleById("songs-time-wrapper"))
      getElementStyleById("songs-time-wrapper").height = playlistLoadState === "loaded" && songsDisplay && "60vh";
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistLoadState]);

  let getElementStyleById = (id) => document.getElementById(id)?.style;
  return (
    <>
      <S.InfoWrapper>
        <S.Thumbnail src={thumbnail} loading="lazy" alt="[Error loading thumbnail]" />
        <S.ListInfo>
          <S.Info>{title}</S.Info>
          <S.Info>Author: {author}</S.Info>
          <S.Info>Number of videos: {list.length}</S.Info>
          <S.Info>Playlist length: {formatTime(length)}</S.Info>
          <S.Info>Creation date: {creationDateFormatted}</S.Info>
          <S.Info>Last refresh: {refreshFormatted}</S.Info>
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
        <Tooltip title={"Refresh playlist details"} placement="top">
          <S.IconWrapper
            onClick={() => {
              getElementStyleById("songs-time-wrapper").height = "0";
              playlistLoadState !== "refreshing" && downloadPlaylistData(playlistId, "refresh_details");
            }}
          >
            <CloudDownloadIcon />
          </S.IconWrapper>
        </Tooltip>
      </S.IconsContainer>
    </>
  );
};

const mapSTP = (state) => ({
  playlistId: state.modal.playlist,
  playlistLoadState: state.loadstate.isPlaylistLoaded,
});

export default connect(mapSTP)(PlaylistInfo);
