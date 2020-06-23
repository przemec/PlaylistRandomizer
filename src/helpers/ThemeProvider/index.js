import React from "react";
import themes from "../../assets/themes";
import { mainTheme } from "../../assets/themes";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

const ThmProvider = ({ themeKey, themeType, children }) => (
  <ThemeProvider theme={themes[themeType || mainTheme.type][themeKey || mainTheme.key]}>{children}</ThemeProvider>
);

const mapSTP = (store) => ({
  themeKey: store.theme.key,
  themeType: store.theme.type,
});

export default connect(mapSTP)(ThmProvider);
