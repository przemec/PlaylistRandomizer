import { resPlaylistsOperations as PS } from "./actions";
import * as LS from "../localstorage";

const resumableplaylists = (state = [], action) => {
  switch (action.type) {
    case PS.SAVE:
      let newstate;
      if (state.map((e) => e.id).indexOf(action.id) !== -1) {
        newstate = state.map((e) => {
          if (e.id === action.id) {
            e.id = action.id;
            e.list = action.list;
            e.index = action.index;
            e.page = action.page;
          }
          return e;
        });
      } else {
        newstate = [
          ...state,
          {
            id: action.id,
            list: action.list,
            index: action.index,
            page: action.page,
          },
        ];
      }

      LS.saveStateLocally("resumableplaylists", newstate);
      return newstate;
    case PS.DELETE:
      const filtered = state.filter((e) => e.id !== action.id);
      LS.saveStateLocally("resumableplaylists", filtered);
      return filtered;
    case PS.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default resumableplaylists;
