import React from "react";
import { connect } from "react-redux";
import * as S from "./style";
import * as T from "../../store/theme/actions";
import { lightThemeList, darkThemeList } from "../../assets/themes";

const ColorPalette = ({ theme, updateTheme, themeType }) => {
  const themeList = themeType === "light" ? lightThemeList : darkThemeList;
  const menu = themeList.map((el) => {
    const { color, secondary, key } = el;
    console.log(theme, key);
    return (
      <S.StyledField key={key} color={color} border={secondary} onClick={() => updateTheme(key)}>
        {theme === key && "✔"}
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
  updateTheme: (themeKey) => {
    dispatch(T.changeTheme(themeKey));
  },
});

export default connect(mapSTP, mapDTP)(ColorPalette);
