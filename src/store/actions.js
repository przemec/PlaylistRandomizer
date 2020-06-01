export const CHANGE_THEME = "CHANGE_THEME";
export const playlistOperations = {
  LOAD: "LOAD_PLAYLIST",
  RANDOMIZE: "RANDOMIZE_PLAYLIST",
  CLEAR: "CLEAR_PLAYLIST",
};

export function loadPlaylist(list) {
  return { type: playlistOperations.LOAD, list };
}

export function randomizePlaylist() {
  return { type: playlistOperations.RANDOMIZE };
}

export function clearPlaylist() {
  return { type: playlistOperations.CLEAR };
}

export function changeTheme(key) {
  return { type: CHANGE_THEME, key };
}
