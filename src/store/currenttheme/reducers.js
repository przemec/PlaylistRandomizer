import { CHANGE_THEME } from "./actions";

const currenttheme = (state = "darkRed", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.key;
    default:
      return state;
  }
};

export default currenttheme;
