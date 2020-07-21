import { combineReducers } from "redux";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";
import listloadstate from "./listloadstate";
import theme from "./theme";
import playerloadstate from "./playerloadstate";

const reducers = combineReducers({
  playlist,
  playlists,
  modal,
  listloadstate,
  theme,
  playerloadstate,
});

export default reducers;
