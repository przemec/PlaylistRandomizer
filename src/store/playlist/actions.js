export const playlistOperations = {
  LOAD_PLAYLIST: "LOAD_PLAYLIST",
  RANDOMIZE: "RANDOMIZE_PLAYLIST",
  CLEAR: "CLEAR_PLAYLIST",
  DELETE_VID: "DELETE_PRIVATE_VID_FROM_LIST",
  PAGE: "SWITCH_PLAYLIST_PAGE",
  INDEX: "SWITCH_PAGE_INDEX",
  RESET: "RESET_PAGE_AND_INDEX_TO_ZERO",
};

export function loadPlaylist(list, id, updated, isbeingresumed) {
  return { type: playlistOperations.LOAD_PLAYLIST, list, id, updated, isbeingresumed };
}

export function switchPage(page) {
  return { type: playlistOperations.PAGE, page };
}

export function switchIndex(index) {
  return { type: playlistOperations.INDEX, index };
}

export function resetToZero() {
  return { type: playlistOperations.RESET };
}

export function deletePrivateVidFromPlaylist(vidID, page) {
  return { type: playlistOperations.DELETE_VID, vidID, page };
}

export function randomizePlaylist() {
  return { type: playlistOperations.RANDOMIZE };
}

export function clearPlaylist() {
  return { type: playlistOperations.CLEAR };
}
