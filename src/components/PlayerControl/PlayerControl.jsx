import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import { setPlaylistID, showModal } from "../../store/modal/actions";
import Tooltip from "../../helpers/Tooltip";
import BarChartRounded from '@material-ui/icons/BarChartRounded';
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const PlayerControl = ({
  shuffle,
  refresh,
  playNext,
  playPrev,
  updated,
  isPrevActive,
  isNextActive,
  playlistLoadState,
  playlistId,
  setModalPlaylist,
  showModal,
}) => (
  <S.Container>
    {playlistLoadState !== "refreshing" && (
      <S.ToolsCont>
        <Tooltip title="Play previous">
          <S.IconWrapper onClick={playPrev} isdisabled={isPrevActive ? 0 : 1}>
            <SkipPreviousIcon />
          </S.IconWrapper>
        </Tooltip>
        <Tooltip title="Play next">
          <S.IconWrapper onClick={playNext} isdisabled={isNextActive ? 0 : 1}>
            <SkipNextIcon />
          </S.IconWrapper>
        </Tooltip>
      </S.ToolsCont>
    )}
    <S.ToolsCont>
      {playlistLoadState !== "refreshing" && (
        <Tooltip title="Playlist details">
          <S.IconWrapper
            onClick={() => {
              setModalPlaylist(playlistId);
              showModal("ListDetailsPage", "Playlist Details");
            }}
          >
            <BarChartRounded />
          </S.IconWrapper>
        </Tooltip>
      )}
      {playlistLoadState !== "refreshing" && (
        <Tooltip title="Shuffle playlist">
          <S.IconWrapper onClick={shuffle}>
            <ShuffleIcon />
          </S.IconWrapper>
        </Tooltip>
      )}
      {playlistLoadState !== "refreshing" ? (
        <Tooltip title={<>Refresh playlist data {updated && <div style={{ clear: "both" }}>Last update: {updated}</div>}</>}>
          <S.IconWrapper onClick={() => playlistLoadState !== "refreshing" && refresh()}>
            <CloudDownloadIcon />
          </S.IconWrapper>
        </Tooltip>
      ) : (
        <S.IconWrapperAlignToRight>
          <S.LoopIco />
        </S.IconWrapperAlignToRight>
      )}
    </S.ToolsCont>
  </S.Container>
);

const mapSTP = (state) => ({
  playlistId: state.playlist.id,
  updated: state.playlist.updated,
  playlistLoadState: state.loadstate.isPlaylistLoaded,
});
const mapDTP = (dispatch) => ({
  setModalPlaylist: (e) => dispatch(setPlaylistID(e)),
  showModal: (type, title) => dispatch(showModal(type, title)),
});

export default connect(mapSTP, mapDTP)(PlayerControl);
