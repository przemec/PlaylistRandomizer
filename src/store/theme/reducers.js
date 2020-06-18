import { CHANGE_THEME, SWAP_THEME } from "./actions";
import * as LS from "../localstorage";
import { mainTheme } from "../../assets/themes";

const theme = (state = { key: mainTheme.key, type: mainTheme.type }, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      LS.saveThemeKey({ key: action.key, type: action.typ });
      return { key: action.key, type: action.typ };
    case SWAP_THEME:
      LS.saveThemeKey({ key: state.key, type: action.typ });
      return { ...state, type: action.typ };
    default:
      return state;
  }
};

export default theme;
