import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import downloadPlaylistData from "../../assets/apiYT";
import Tooltip from "../../helpers/Tooltip";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const PlayerControl = ({ currentListID, shuffle, playNext, playPrev, switchPlayerState, playerState, updated }) => (
  <S.Container>
    <S.ToolsCont>
      <Tooltip title="Play previous">
        <S.IconWrapper onClick={playPrev}>
          <SkipPreviousIcon />
        </S.IconWrapper>
      </Tooltip>
      <Tooltip title={playerState === 2 ? "Play" : "Pause"}>
        <S.IconWrapper onClick={switchPlayerState}>{playerState === 2 ? <PlayArrowIcon /> : <PauseIcon />}</S.IconWrapper>
      </Tooltip>
      <Tooltip title="Play next">
        <S.IconWrapper onClick={playNext}>
          <SkipNextIcon />
        </S.IconWrapper>
      </Tooltip>
    </S.ToolsCont>
    <S.ToolsCont>
      <Tooltip title="Shuffle playlist">
        <S.IconWrapper onClick={shuffle}>
          <ShuffleIcon />
        </S.IconWrapper>
      </Tooltip>
      <Tooltip title={<>Refresh playlist data {updated && <div style={{ clear: "both" }}>Lastly updated: {updated}</div>}</>}>
        <S.IconWrapper onClick={() => downloadPlaylistData(currentListID, "refresh")}>
          <CloudDownloadIcon />
        </S.IconWrapper>
      </Tooltip>
    </S.ToolsCont>
  </S.Container>
);

const mapSTP = (state) => ({
  updated: state.playlist.updated,
});

export default connect(mapSTP)(PlayerControl);
