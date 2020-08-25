import { playlistsOperations as PS } from "./actions";
import * as LS from "../localstorage";

const playlists = (state = [], action) => {
  const d = new Date();
  const z = (number) => (number < 10 ? `0${number}` : number);
  const time = `${z(d.getDate())}/${z(d.getMonth() + 1)}/${d.getFullYear()}, ${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
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
      const edited = state.map((e) => {
        if (e.id === action.id) {
          e.updated = time;
          e.listData = action.listData;
          e.list = action.list;
        }
        return e;
      });
      LS.saveStateLocally("playlists", edited);
      return edited;
    case PS.TOGGLE_FAV:
      const toggled = state.map((e) => {
        if (e.id === action.id) {
          e.isFav = !e.isFav;
        }
        return e;
      });
      LS.saveStateLocally("playlists", toggled);
      return toggled;
    case PS.DELETE_VID:
      const updated = state.filter((e) => {
        return e.id !== action.id && e.list.filter((ex) => ex.videoId !== action.vidID);
      });
      LS.saveStateLocally("playlists", updated);
      return updated;
    case PS.DELETE:
      const filtered = state.filter((e) => e.id !== action.id);
      LS.saveStateLocally("playlists", filtered);
      return filtered;
    case PS.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlists;
