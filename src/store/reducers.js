import { combineReducers } from "redux";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";
import listloadstate from "./listloadstate";
import theme from "./theme";

const reducers = combineReducers({
  playlist,
  playlists,
  modal,
  listloadstate,
  theme,
});

export default reducers;
