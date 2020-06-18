import React from "react";
import themes from "../../assets/themes";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

const ThmProvider = ({ themeKey, themeType, children }) => {
  console.log(themes, themes[themeType || "light"]);
  return <ThemeProvider theme={themes[themeType || "light"][themeKey || "brick"]}>{children}</ThemeProvider>;
};

const mapSTP = (store) => ({
  themeKey: store.theme.key,
  themeType: store.theme.type,
});

export default connect(mapSTP)(ThmProvider);
