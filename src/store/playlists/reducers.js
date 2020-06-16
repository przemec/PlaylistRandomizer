import { playlistsOperations } from "./actions";
import * as LS from "../localstorage";

const playlists = (state = [], action) => {
  switch (action.type) {
    case playlistsOperations.ADD:
      const listObj = {
        id: action.id,
        list: action.list,
      };
      LS.savePlaylists([...state, listObj]);
      return [...state, listObj];
    case playlistsOperations.EDIT:
      state.map((e) => {
        e.id === action.id && (e.list = action.list);
        return e;
      });
      LS.savePlaylists(state);
      return state;
    case playlistsOperations.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlists;
