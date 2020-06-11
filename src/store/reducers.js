import { combineReducers } from "redux";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";

const reducers = combineReducers({
  playlist,
  playlists,
  modal,
});

export default reducers;
