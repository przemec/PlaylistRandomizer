import { CHANGE_THEME } from "./actions";
import * as LS from "../localstorage";

const theme = (state = "darkRed", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      LS.saveThemeKey(action.key);
      return action.key;
    default:
      return state;
  }
};

export default theme;
