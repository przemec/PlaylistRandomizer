import React from "react";
import * as S from "./style";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import { Hidden } from "@material-ui/core";
import { connect } from "react-redux";
import { showModal } from "../../store/modal/actions";

const AppBar = ({ showM }) => {
  return (
    <S.StyledAppBar>
      <Hidden xsDown>
        <S.Title>YouTube Randomizer</S.Title>
      </Hidden>
      <Hidden smUp>
        <S.Title>YTR</S.Title>
      </Hidden>
      <S.IconContainer>
        <S.IconWrapper onClick={() => showM("SettingsPage")}>
          <SettingsIcon />
        </S.IconWrapper>
        <S.IconWrapper onClick={() => showM("InfoPage")}>
          <HelpOutlineIcon />
        </S.IconWrapper>
      </S.IconContainer>
    </S.StyledAppBar>
  );
};

const mapDTP = (dispatch) => ({
  showM: (type) => {
    dispatch(showModal(type));
  },
});

export default connect(null, mapDTP)(AppBar);