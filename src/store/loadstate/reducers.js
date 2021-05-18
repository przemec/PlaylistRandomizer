import { SET_PLAYLIST_LOAD_STATE, THROW_PLAYLIST_LOAD_ERROR, SET_PLAYER_LOAD_STATE } from "./actions";

const loadstate = (state = { isPlaylistLoaded: false, isPlaylistError: false, isPlayerLoaded: false }, action) => {
  switch (action.type) {
    case SET_PLAYLIST_LOAD_STATE:
      return { ...state, isPlaylistLoaded: action.val };
    case SET_PLAYER_LOAD_STATE:
      return { ...state, isPlayerLoaded: action.val };
    case THROW_PLAYLIST_LOAD_ERROR:
      return { ...state, isPlaylistError: action.val };
    default:
      return state;
  }
};

export default loadstate;
