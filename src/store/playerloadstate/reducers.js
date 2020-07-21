import { SET_PLAYER } from "./actions";

const playerloadstate = (state = null, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.val;
    default:
      return state;
  }
};

export default playerloadstate;
