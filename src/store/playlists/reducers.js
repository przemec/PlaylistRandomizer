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
        isFav: false,
        listData: action.listData,
        list: action.list,
      };
      LS.saveStateLocally("playlists", [...state, listObj]);
      return [...state, listObj];
    case PS.EDIT:
      state.map((e) => {
        if (e.id === action.id) {
          e.updated = time;
          e.listData.thumbnail = action.listData.thumbnail;
          e.listData.title = action.listData.title;
          e.list = action.list;
        }
        return e;
      });
      LS.saveStateLocally("playlists", state);
      return state;
    case PS.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlists;
