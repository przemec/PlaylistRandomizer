import { createStore } from "redux";
import reducers from "./reducers";
import * as L from "./localstorage";

const playlists = L.loadState("playlists");
const theme = L.loadState("theme");
const settings = L.loadState("settings");
const resumableplaylists = L.loadState("resumableplaylists");

export const store = createStore(reducers, { playlists, theme, settings, resumableplaylists }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//   console.log("redux ACTION: ", store.getState().lastAction);
//   console.log("redux state AFTER: ", store.getState());
// });
