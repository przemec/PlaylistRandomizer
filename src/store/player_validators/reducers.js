import { SET_IS_NEXT_PAGE, SET_IS_PRIV_CHECK } from "./actions";

const player_validators = (state = { nextpage: false, checkprivvids: false }, action) => {
  switch (action.type) {
    case SET_IS_NEXT_PAGE:
      return { ...state, nextpage: action.val };
    case SET_IS_PRIV_CHECK:
      return { ...state, checkprivvids: action.val };
    default:
      return state;
  }
};

export default player_validators;
