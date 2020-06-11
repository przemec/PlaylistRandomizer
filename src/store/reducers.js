import { combineReducers } from "redux";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";
import listloadstate from "./listloadstate";

const reducers = combineReducers({
  playlist,
  playlists,
  modal,
  listloadstate,
});

export default reducers;
