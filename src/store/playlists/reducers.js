import { playlistsOperations } from "./actions";

const playlists = (state = [], action) => {
  switch (action.type) {
    case playlistsOperations.ADD:
      const listObj = {
        id: action.id,
        list: action.list,
      };
      console.log(action, listObj);
      // state = [...state, listObj];
      return [...state, listObj];
    case playlistsOperations.EDIT:
      state.map((e) => {
        e.id === action.id && (e.list = action.list);
        return e;
      });
      return state;
    case playlistsOperations.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlists;
