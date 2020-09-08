import { createStore } from "redux";
import reducers from "./reducers";
import * as L from "./localstorage";

const playlists = L.loadState("playlists");
const theme = L.loadState("theme");
const settings = L.loadState("settings");
const resumableplaylists = L.loadState("resumableplaylists");

console.log(settings);

export const store = createStore(reducers, { playlists, theme, settings, resumableplaylists });

store.subscribe(() => {
  console.log("redux state: ", store.getState());
  // console.log("redux ACTION: ", store.getState().lastAction);
});
