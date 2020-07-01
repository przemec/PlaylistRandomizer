import React from "react";
import * as S from "./style";
import downloadPlaylistData from "../../assets/apiYT";
import Tooltip from "../../helpers/Tooltip";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const PlayerControl = ({ currentListID, shuffle }) => (
  <S.Container>
    <Tooltip title="Shuffle playlist">
      <S.IconWrapper onClick={shuffle}>
        <ShuffleIcon />
      </S.IconWrapper>
    </Tooltip>
    <Tooltip title="Refresh playlist data">
      <S.IconWrapper onClick={() => downloadPlaylistData(currentListID, "refresh")}>
        <CloudDownloadIcon />
      </S.IconWrapper>
    </Tooltip>
  </S.Container>
);

export default PlayerControl;
