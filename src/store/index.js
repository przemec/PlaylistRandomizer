import { createStore } from "redux";
import reducers from "./reducers";
import * as L from "./localstorage";

const playlists = L.loadState("playlists");
const theme = L.loadState("theme");
const settings = L.loadState("settings");

export const store = createStore(reducers, { playlists, theme, settings });

store.subscribe(() => {
  console.log("redux state: ", store.getState());
});
