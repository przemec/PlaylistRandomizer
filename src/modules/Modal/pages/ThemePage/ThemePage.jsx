import React from "react";
import * as S from "./style";
import { Grid } from "@material-ui/core/";
import ColorPalette from "../../../../components/ColorPalette";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const ThemePage = () => {
  const [themeType, changeType] = React.useState("light");
  return (
    <Grid container justify="center" alignItems="center">
      <S.Header> Theme Settings</S.Header>
      <S.ThemeTypeCont container justify="center" alignItems="center">
        <S.StyledField isactive={themeType === "light"} onClick={() => changeType("light")}>
          {themeType === "light" ? <WbSunnyIcon /> : <WbSunnyOutlinedIcon />}
        </S.StyledField>
        <S.StyledField isactive={themeType === "dark"} onClick={() => changeType("dark")}>
          {themeType === "dark" ? <Brightness2Icon /> : <Brightness2OutlinedIcon />}
        </S.StyledField>
      </S.ThemeTypeCont>
      <ColorPalette themeType={themeType} />
    </Grid>
  );
};

export default ThemePage;
