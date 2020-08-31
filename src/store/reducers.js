import { combineReducers } from "redux";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";
import listloadstate from "./listloadstate";
import theme from "./theme";
import settings from "./settings";
import resumableplaylists from "./resumableplaylists";
import { lastAction } from "../helpers/LogLastReduxAction";

const reducers = combineReducers({
  playlist,
  playlists,
  modal,
  listloadstate,
  theme,
  settings,
  resumableplaylists,
  lastAction,
});

export default reducers;
