import React from "react";
import * as S from "./style";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PaletteIcon from "@material-ui/icons/Palette";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { connect } from "react-redux";
import { showModal } from "../../store/modal/actions";
import { swapTheme } from "../../store/theme/actions";

const AppBar = ({ showM, swapT, themeType }) => (
  <S.StyledAppBar>
    <S.Title to="/">Playlist Randomizer</S.Title>
    <S.IconContainer>
      <S.IconWrapper onClick={() => swapT(themeType === "light" ? "dark" : "light")}>
        {themeType === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </S.IconWrapper>
      <S.IconWrapper onClick={() => showM("ThemePage", "Theme Settings")}>
        <PaletteIcon />
      </S.IconWrapper>
      <S.IconWrapper onClick={() => showM("InfoPage", "About")}>
        <HelpOutlineIcon />
      </S.IconWrapper>
    </S.IconContainer>
  </S.StyledAppBar>
);

const mapSTP = (state) => ({
  themeType: state.theme.type,
});
const mapDTP = (dispatch) => ({
  showM: (type, title) => dispatch(showModal(type, title)),
  swapT: (type, title) => dispatch(swapTheme(type, title)),
});

export default connect(mapSTP, mapDTP)(AppBar);
