import { combineReducers } from "redux";
import { SWITCH_MODAL } from "./actions";

const modal = (state = false, action) => {
  switch (action.type) {
    case SWITCH_MODAL:
      state = action.val;
      return state;
    default:
      return state;
  }
};

export default modal;
