import { SHOW_MODAL, HIDE_MODAL } from "./actions";

const modal = (state = { isvisible: false, type: undefined }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isvisible: true, type: action.typ };
    case HIDE_MODAL:
      return { ...state, isvisible: false };
    default:
      return state;
  }
};

export default modal;
