import { SHOW_MODAL, HIDE_MODAL } from "./actions";

const modal = (state = { isvisible: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { isvisible: true, type: action.typ, title: action.title };
    case HIDE_MODAL:
      return { ...state, isvisible: false };
    default:
      return state;
  }
};

export default modal;
