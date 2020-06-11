import { createStore } from "redux";
import reducers from "./reducers";
import * as L from "./localstorage";
import { throttle } from "throttle-debounce";

const localstorage = L.loadState();
export const store = createStore(reducers, localstorage);

store.subscribe(
  throttle(500, () => {
    L.saveState({ playlists: store.getState().playlists });
    console.log("redux state: ", store.getState());
  })
);
