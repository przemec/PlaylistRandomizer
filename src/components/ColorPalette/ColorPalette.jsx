import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import * as T from "../../store/theme/actions";
import { lightThemeList, darkThemeList } from "../../assets/themes";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

const ColorPalette = ({ theme, updateTheme, themeType }) => {
  const themeList = themeType === "light" ? lightThemeList : darkThemeList;
  const menu = themeList.map((el) => {
    const { color, secondary, key, type } = el;
    return (
      <S.StyledField
        key={key}
        color={color}
        ischecked={theme.key === key ? 1 : 0}
        border={secondary}
        onClick={() => updateTheme(key, type)}
      >
        {theme.key === key && <CheckRoundedIcon />}
      </S.StyledField>
    );
  });
  return (
    <S.StyledContainer container justify="center">
      {menu}
    </S.StyledContainer>
  );
};

const mapSTP = (state) => ({
  theme: state.theme,
});
const mapDTP = (dispatch) => ({
  updateTheme: (themeKey, themeType) => dispatch(T.changeTheme(themeKey, themeType)),
});

export default connect(mapSTP, mapDTP)(ColorPalette);
