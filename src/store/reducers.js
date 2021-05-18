import { combineReducers } from "redux";
import player from "./player";
import playlist from "./playlist";
import playlists from "./playlists";
import modal from "./modal";
import loadstate from "./loadstate";
import player_validators from "./player_validators";
import theme from "./theme";
import settings from "./settings";
import resumableplaylists from "./resumableplaylists";
import { lastAction } from "../helpers/LogLastReduxAction";

const reducers = combineReducers({
  player,
  playlist,
  playlists,
  modal,
  loadstate,
  player_validators,
  theme,
  settings,
  resumableplaylists,
  lastAction,
});

export default reducers;
