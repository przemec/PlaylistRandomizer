import React from "react";
import * as S from "./style";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PaletteIcon from "@material-ui/icons/Palette";
import { Hidden } from "@material-ui/core";
import { connect } from "react-redux";
import { showModal } from "../../store/modal/actions";

const AppBar = ({ showM }) => (
  <S.StyledAppBar>
    <Hidden xsDown>
      <S.Title to="/">YouTube Randomizer</S.Title>
    </Hidden>
    <Hidden smUp>
      <S.Title to="/">YTR</S.Title>
    </Hidden>
    <S.IconContainer>
      <S.IconWrapper onClick={() => showM("ThemePage")}>
        <PaletteIcon />
      </S.IconWrapper>
      <S.IconWrapper onClick={() => showM("InfoPage")}>
        <HelpOutlineIcon />
      </S.IconWrapper>
    </S.IconContainer>
  </S.StyledAppBar>
);

const mapDTP = (dispatch) => ({
  showM: (type) => {
    dispatch(showModal(type));
  },
});

export default connect(null, mapDTP)(AppBar);
