import { playerOperations as PL } from "./actions";

const player = (state = {}, action) => {
  switch (action.type) {
    case PL.SET_PLAYER:
      return action.player;
    case PL.CLEAR_PLAYER:
      state && state.destroy && state.destroy()
      return {};
    default:
      return state;
  }
};

export default player;
