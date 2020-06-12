import React from "react";
import * as S from "./style";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import downloadPlaylistData from "../../assets/apiYT";

const PlayerControl = ({ currentListID, shuffle }) => (
  <S.Container>
    <S.IconWrapper onClick={shuffle}>
      <ShuffleIcon />
    </S.IconWrapper>
    <S.IconWrapper onClick={() => downloadPlaylistData(currentListID, "refresh")}>
      <CloudDownloadIcon />
    </S.IconWrapper>
  </S.Container>
);

export default PlayerControl;
