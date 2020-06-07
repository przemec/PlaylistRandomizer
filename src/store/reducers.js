import { combineReducers } from "redux";
import playlist from "./playlist";
import modal from "./modal";

const reducers = combineReducers({
  playlist,
  modal,
});

export default reducers;
