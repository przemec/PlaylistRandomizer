import { defaultTheme, brick, salmon, red, orange, purple, intensivePurple, cyan, blue, steelBlue, grey, green, olive, magenta, pink } from "./light";
import { dark, darkPink, darkPurple, darkRed } from "./dark";

export const lightThemeList = [
  { key: "defaultTheme", color: "#303f9f", secondary: "#c0c0c0" },
  { key: "blue", color: "#1976D2", secondary: "#c0c0c0" },
  { key: "steelBlue", color: "#2980B9", secondary: "#c0c0c0" },
  { key: "cyan", color: "#1DE9B6", secondary: "#c0c0c0" },
  { key: "green", color: "#00ac41", secondary: "#c0c0c0" },
  { key: "olive", color: "#a1b435", secondary: "#c0c0c0" },
  { key: "orange", color: "#FF8F00", secondary: "#c0c0c0" },
  { key: "salmon", color: "#FF5252", secondary: "#c0c0c0" },
  { key: "red", color: "#E74C3C", secondary: "#c0c0c0" },
  { key: "brick", color: "#C0392B", secondary: "#c0c0c0" },
  { key: "magenta", color: "#d53c81", secondary: "#c0c0c0" },
  { key: "pink", color: "#d32eb2", secondary: "#c0c0c0" },
  { key: "purple", color: "#9B59B6", secondary: "#c0c0c0" },
  { key: "intensivePurple", color: "#542ed3", secondary: "#c0c0c0" },
  { key: "grey", color: "#37474F", secondary: "#c0c0c0" },
];

export const darkThemeList = [
  { key: "dark", color: "#232323", secondary: "#767676" },
  { key: "darkPink", color: "#232323", secondary: "#F48FB1" },
  { key: "darkPurple", color: "#232323", secondary: "#B39DDB" },
  { key: "darkRed", color: "#232323", secondary: "#ef9a9a" },
];

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
  defaultTheme: enhanceTheme(defaultTheme),
  brick: enhanceTheme(brick),
  salmon: enhanceTheme(salmon),
  red: enhanceTheme(red),
  orange: enhanceTheme(orange),
  purple: enhanceTheme(purple),
  intensivePurple: enhanceTheme(intensivePurple),
  cyan: enhanceTheme(cyan),
  blue: enhanceTheme(blue),
  steelBlue: enhanceTheme(steelBlue),
  grey: enhanceTheme(grey),
  green: enhanceTheme(green),
  olive: enhanceTheme(olive),
  magenta: enhanceTheme(magenta),
  pink: enhanceTheme(pink),
  dark: enhanceTheme(dark),
  darkPink: enhanceTheme(darkPink),
  darkPurple: enhanceTheme(darkPurple),
  darkRed: enhanceTheme(darkRed),
};

export const mainTheme = "brick";
