import { createStore } from "redux";
import reducers from "./reducers";
import * as L from "./localstorage";

const localstorage = L.loadState();
export const store = createStore(reducers, localstorage);

store.subscribe(() => {
  console.log("redux state: ", store.getState());
});
