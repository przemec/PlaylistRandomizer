import React from "react";
import themes from "../../assets/themes";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

const ThmProvider = ({ themeKey, children }) => <ThemeProvider theme={themes[themeKey]}>{children}</ThemeProvider>;

const mapSTP = (store) => ({
  themeKey: store.currenttheme,
});

export default connect(mapSTP)(ThmProvider);
