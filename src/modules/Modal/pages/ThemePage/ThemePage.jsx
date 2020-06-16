import React from "react";
import * as S from "./style";
import ColorPalette from "../../../../components/ColorPalette";

const ThemePage = () => {
  const [themeType, changeType] = React.useState("light");
  return (
    <S.ThemesWrapper>
      <ColorPalette themeType={themeType} />
    </S.ThemesWrapper>
  );
};

export default ThemePage;
