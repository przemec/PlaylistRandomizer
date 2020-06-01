import { combineReducers } from "redux";
import { playlistOperations, CHANGE_THEME } from "./actions";

const themes = (state = [], action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state;
    default:
      return state;
  }
};

const playlist = (state = [], action) => {
  switch (action.type) {
    case playlistOperations.LOAD:
      action.list.map((e) => (state = [...state, e]));
      return state;
    case playlistOperations.CLEAR:
      state = [];
      return state;
    case playlistOperations.RANDOMIZE:
      state.sort(() => Math.random() - 0.5);
      return state;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  themes,
  playlist,
});

export default todoApp;
