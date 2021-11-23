import { SHOW_MODAL, HIDE_MODAL, SET_PLAYLIST_ID } from "./actions";

const modal = (state = { isvisible: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isvisible: true, type: action.typ, title: action.title };
    case HIDE_MODAL:
      return { ...state, isvisible: false };
    case SET_PLAYLIST_ID:
      return { ...state, playlist: action.id };
    default:
      return state;
  }
};

export default modal;
