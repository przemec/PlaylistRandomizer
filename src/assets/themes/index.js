import { defaultTheme, brick, salmon, orange, purple, intensivePurple, cyan, steelBlue, grey, green, olive, pink } from "./light";
import { dark, darkPink, darkPurple, darkBrick } from "./dark";

export const lightThemeList = [
  { key: "defaultTheme", color: "#303f9f" },
  { key: "steelBlue", color: "#2980B9" },
  { key: "cyan", color: "#1DE9B6" },
  { key: "green", color: "#00ac41" },
  { key: "olive", color: "#a1b435" },
  { key: "orange", color: "#FF8F00" },
  { key: "salmon", color: "#FF5252" },
  { key: "brick", color: "#C0392B" },
  { key: "pink", color: "#d53c81" },
  { key: "purple", color: "#9B59B6" },
  { key: "intensivePurple", color: "#542ed3" },
  { key: "grey", color: "#37474F" },
].map((e) => (e = { ...e, secondary: "#c0c0c0", type: "light" }));

export const darkThemeList = [
  { key: "defaultTheme", secondary: "#767676" },
  { key: "pink", secondary: "#F48FB1" },
  { key: "purple", secondary: "#B39DDB" },
  { key: "brick", secondary: "#ef9a9a" },
].map((e) => (e = { ...e, color: "#232323", type: "dark" }));

const enhanceTheme = (theme) => {
  let themeConstants = {
    appbarText: "#ffffffdd",
    appbarTextHover: "#fff",
    resultText: "#000000aa",
    resultTextHover: "#000",
    background: "#f5f5f5",
    backgroundAccent: "#dadada",
  };
  if (theme.type === "dark")
    themeConstants = {
      appbarText: "#eee",
      appbarTextHover: "#fff",
      resultText: "#eee",
      resultTextHover: "#fff",
      background: "#121212",
      backgroundAccent: "#232323",
    };
  return { ...theme, ...themeConstants };
};

export default {
  light: {
    defaultTheme: enhanceTheme(defaultTheme),
    brick: enhanceTheme(brick),
    salmon: enhanceTheme(salmon),
    orange: enhanceTheme(orange),
    purple: enhanceTheme(purple),
    intensivePurple: enhanceTheme(intensivePurple),
    cyan: enhanceTheme(cyan),
    steelBlue: enhanceTheme(steelBlue),
    grey: enhanceTheme(grey),
    green: enhanceTheme(green),
    olive: enhanceTheme(olive),
    pink: enhanceTheme(pink),
  },
  dark: {
    defaultTheme: enhanceTheme(dark),
    pink: enhanceTheme(darkPink),
    purple: enhanceTheme(darkPurple),
    brick: enhanceTheme(darkBrick),
    salmon: enhanceTheme(dark),
    orange: enhanceTheme(dark),
    intensivePurple: enhanceTheme(dark),
    cyan: enhanceTheme(dark),
    steelBlue: enhanceTheme(dark),
    grey: enhanceTheme(dark),
    green: enhanceTheme(dark),
    olive: enhanceTheme(dark),
  },
};

export const mainTheme = { key: "brick", type: "light" };
