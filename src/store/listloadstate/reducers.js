import { SWITCH_LOAD, LOAD_ERROR } from "./actions";

const listloadstate = (state = { isLoaded: false, isError: false }, action) => {
  switch (action.type) {
    case SWITCH_LOAD:
      return { ...state, isLoaded: action.val };
    case LOAD_ERROR:
      return { ...state, isError: action.val };
    default:
      return state;
  }
};

export default listloadstate;
