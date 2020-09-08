import { settingsOperations as SO } from "./actions";
import * as LS from "../localstorage";

const settings = (
  state = { autoshuffle: true, autoscroll: true, displayfeatured: true, autoresume: false, loop: false, autorefresh: false },
  action
) => {
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
    case SO.RESUME:
      LS.saveStateLocally("settings", { ...state, autoresume: !state.autoresume });
      return { ...state, autoresume: !state.autoresume };
    case SO.LOOP:
      LS.saveStateLocally("settings", { ...state, loop: !state.loop });
      return { ...state, loop: !state.loop };
    case SO.REFRESH:
      LS.saveStateLocally("settings", { ...state, autorefresh: !state.autorefresh });
      return { ...state, autorefresh: !state.autorefresh };
    default:
      return state;
  }
};

export default settings;
