import React from "react";
import * as S from "./style";
import { connect } from "react-redux";
import { showModal } from "../../store/modal/actions";
import { swapTheme } from "../../store/theme/actions";
import { clearPlayer } from "../../store/player/actions";
import Tooltip from "../../helpers/Tooltip";
import PaletteIcon from "@material-ui/icons/Palette";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const AppBar = ({ showM, swapT, themeType, destroyPlayer }) => (
  <S.StyledAppBar>
    <S.HomepageLink
      onClick={() => {
        destroyPlayer();
        document.getElementById("list-container").style.display = "none";
      }}
      to="/"
    >
      Playlist Randomizer
    </S.HomepageLink>
    <S.IconContainer>
      <Tooltip title="Toggle theme mode">
        <S.IconWrapper onClick={() => swapT(themeType === "light" ? "dark" : "light")}>{themeType === "light" ? <Brightness4Icon /> : <Brightness7Icon />}</S.IconWrapper>
      </Tooltip>
      <Tooltip title="Themes">
        <S.IconWrapper onClick={() => showM("ThemePage", "Theme Picker")}>
          <PaletteIcon />
        </S.IconWrapper>
      </Tooltip>
      <Tooltip title="Settings">
        <S.IconWrapper onClick={() => showM("SettingsPage", "Page Settings")}>
          <SettingsIcon />
        </S.IconWrapper>
      </Tooltip>
      <Tooltip title="About">
        <S.IconWrapper onClick={() => showM("InfoPage", "About")}>
          <HelpOutlineIcon />
        </S.IconWrapper>
      </Tooltip>
    </S.IconContainer>
  </S.StyledAppBar>
);

const mapSTP = (state) => ({
  themeType: state.theme.type,
});
const mapDTP = (dispatch) => ({
  destroyPlayer: () => dispatch(clearPlayer()),
  showM: (type, title) => dispatch(showModal(type, title)),
  swapT: (type, title) => dispatch(swapTheme(type, title)),
});

export default connect(mapSTP, mapDTP)(AppBar);
