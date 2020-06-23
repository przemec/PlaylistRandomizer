import { blue, brick, salmon, orange, purple, intensivePurple, cyan, steelBlue, grey, green, olive, pink } from "./light";
import { dark, dbrick, dsalmon, dorange, dpurple, dintensivePurple, dcyan, dsteelBlue, dblue, dgreen, dolive, dpink } from "./dark";

export const lightThemeList = [
  { key: "blue", color: blue.primary },
  { key: "steelBlue", color: steelBlue.primary },
  { key: "cyan", color: cyan.primary },
  { key: "green", color: green.primary },
  { key: "olive", color: olive.primary },
  { key: "orange", color: orange.primary },
  { key: "salmon", color: salmon.primary },
  { key: "brick", color: brick.primary },
  { key: "pink", color: pink.primary },
  { key: "purple", color: purple.primary },
  { key: "intensivePurple", color: intensivePurple.primary },
  { key: "grey", color: grey.primary },
].map((e) => (e = { ...e, secondary: "#c0c0c0", type: "light" }));

export const darkThemeList = [
  { key: "blue", secondary: dblue.primary },
  { key: "steelBlue", secondary: dsteelBlue.primary },
  { key: "cyan", secondary: dcyan.primary },
  { key: "green", secondary: dgreen.primary },
  { key: "olive", secondary: dolive.primary },
  { key: "orange", secondary: dorange.primary },
  { key: "salmon", secondary: dsalmon.primary },
  { key: "brick", secondary: dbrick.primary },
  { key: "pink", secondary: dpink.primary },
  { key: "purple", secondary: dpurple.primary },
  { key: "intensivePurple", secondary: dintensivePurple.primary },
  { key: "grey", secondary: dark.primary },
].map((e) => (e = { ...e, color: "#232323", type: "dark" }));

const enhanceTheme = (theme) => {
  let themeConstants = {
    defaultText: "#000000aa",
    defaultTextHover: "#000",
    colorText: "#ffffffdd",
    colorTextHover: "#fff",
    appbarText: "#ffffffdd",
    appbarTextHover: "#fff",
    background: "#f5f5f5",
    backgroundAccent: "#dadada",
  };
  if (theme.type === "dark")
    themeConstants = {
      defaultText: "#eee",
      defaultTextHover: "#fff",
      colorText: "#000000aa",
      colorTextHover: "#000",
      appbarText: "#eee",
      appbarTextHover: "#fff",
      background: "#121212",
      backgroundAccent: "#232323",
    };
  return { ...theme, ...themeConstants };
};

export default {
  light: {
    blue: enhanceTheme(blue),
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
    blue: enhanceTheme(dblue),
    brick: enhanceTheme(dbrick),
    salmon: enhanceTheme(dsalmon),
    orange: enhanceTheme(dorange),
    purple: enhanceTheme(dpurple),
    intensivePurple: enhanceTheme(dintensivePurple),
    cyan: enhanceTheme(dcyan),
    steelBlue: enhanceTheme(dsteelBlue),
    grey: enhanceTheme(dark),
    green: enhanceTheme(dgreen),
    olive: enhanceTheme(dolive),
    pink: enhanceTheme(dpink),
  },
};

export const mainTheme = { key: "brick", type: "light" };
