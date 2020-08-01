import { settingsOperations as SO } from "./actions";
import * as LS from "../localstorage";

const settings = (state = { autoshuffle: true, autoscroll: true, displayfeatured: true }, action) => {
  switch (action.type) {
    case SO.SHUFFLE:
      LS.saveStateLocally("settings", { ...state, autoshuffle: !state.autoshuffle });
      return { ...state, autoshuffle: !state.autoshuffle };
    case SO.SCROLL:
      LS.saveStateLocally("settings", { ...state, autoscroll: !state.autoscroll });
      return { ...state, autoscroll: !state.autoscroll };
    case SO.FEATURED:
      LS.saveStateLocally("settings", { ...state, displayfeatured: !state.displayfeatured });
      return { ...state, displayfeatured: !state.displayfeatured };
    default:
      return state;
  }
};

export default settings;
