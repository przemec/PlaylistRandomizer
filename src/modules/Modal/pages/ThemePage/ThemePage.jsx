import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import ColorPalette from "../../../../components/ColorPalette";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import { swapTheme } from "../../../../store/theme/actions";

const ThemePage = ({ themeType, swapTheme, resizeref }) => (
  <S.Cont justify="center" alignItems="center" ref={resizeref()}>
    <S.ThemeTypeCont container justify="center" alignItems="center">
      <S.StyledField isactive={themeType === "light" ? 1 : 0} onClick={() => swapTheme("light")}>
        {themeType === "light" ? <WbSunnyIcon /> : <WbSunnyOutlinedIcon />}
      </S.StyledField>
      <S.StyledField isactive={themeType === "dark" ? 1 : 0} onClick={() => swapTheme("dark")}>
        {themeType === "dark" ? <Brightness2Icon /> : <Brightness2OutlinedIcon />}
      </S.StyledField>
    </S.ThemeTypeCont>
    <ColorPalette themeType={themeType} />
  </S.Cont>
);

const mapSTP = (state) => ({
  themeType: state.theme.type,
});
const mapDTP = (dispatch) => ({
  swapTheme: (type) => dispatch(swapTheme(type)),
});
export default connect(mapSTP, mapDTP)(ThemePage);
