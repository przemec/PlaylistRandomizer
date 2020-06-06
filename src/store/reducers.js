import { combineReducers } from "redux";
import { playlistOperations, CHANGE_THEME, SWITCH_MODAL } from "./actions";

const themes = (state = [], action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state;
    default:
      return state;
  }
};

const modal = (state = true, action) => {
  switch (action.type) {
    case SWITCH_MODAL:
      state = !state;
      return state;
    default:
      return state;
  }
};

const slice200 = (songs) => {
  const allPages = Math.floor(songs.length / 200);
  let pages = [];
  for (let i = 0; i <= allPages; i++) {
    let k = songs.filter((ev, index) => index >= i * 200 && index < i * 200 + 200 && ev);
    pages.push(k);
  }
  return pages;
};

const playlist = (state = [], action) => {
  switch (action.type) {
    case playlistOperations.LOAD:
      action.list.map((e) => (state = [...state, e]));
      return state;
    case playlistOperations.SLICE:
      const pages = slice200(state);
      state = pages;
      return state;
    case playlistOperations.RANDOMIZE:
      let allSongs = [];
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          allSongs.push(state[i][j]);
        }
      }
      allSongs.sort(() => Math.random() - 0.5);
      const slicedRandom = slice200(allSongs);
      state = slicedRandom;
      return state;
    case playlistOperations.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  themes,
  playlist,
  modal,
});

export default todoApp;
