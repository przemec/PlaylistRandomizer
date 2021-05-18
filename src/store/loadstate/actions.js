export const SET_PLAYLIST_LOAD_STATE = "SET_PLAYLIST_LOAD_STATE";
export const SET_PLAYER_LOAD_STATE = "SET_PLAYER_LOAD_STATE";
export const THROW_PLAYLIST_LOAD_ERROR = "THROW_PLAYLIST_LOAD_ERROR";

export function setPlaylistState(val) {
  return { type: SET_PLAYLIST_LOAD_STATE, val };
}

export function loadError(val) {
  return { type: THROW_PLAYLIST_LOAD_ERROR, val };
}

export function setPlayerState(val) {
  return { type: SET_PLAYER_LOAD_STATE, val };
}