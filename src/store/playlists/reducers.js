import { playlistsOperations as PS } from "./actions";
import * as LS from "../localstorage";

const playlists = (state = [], action) => {
  const d = new Date();
  const z = (number) => (number < 10 ? `0${number}` : number);
  const time = `${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}, ${z(d.getDate())}/${z(d.getMonth() + 1)}/${d.getFullYear()}`;
  switch (action.type) {
    case PS.ADD:
      const listObj = {
        id: action.id,
        updated: time,
        list: action.list,
      };
      LS.savePlaylists([...state, listObj]);
      return [...state, listObj];
    case PS.EDIT:
      state.map((e) => {
        if (e.id === action.id) {
          e.updated = time;
          e.list = action.list;
        }
        return e;
      });
      LS.savePlaylists(state);
      return state;
    case PS.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlists;
