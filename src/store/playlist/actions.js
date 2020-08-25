export const playlistOperations = {
  LOAD_PART: "LOAD_PART",
  LOAD_PLAYLIST: "LOAD_PLAYLIST",
  SLICE: "SLICE_PLAYLIST",
  RANDOMIZE: "RANDOMIZE_PLAYLIST",
  CLEAR: "CLEAR_PLAYLIST",
  DELETE_VID: "DELETE_PRIVATE_VID_FROM_LIST",
};

export function loadPart(list) {
  return { type: playlistOperations.LOAD_PART, list };
}

export function loadPlaylist(list, id, updated, isFav) {
  return { type: playlistOperations.LOAD_PLAYLIST, list, id, updated, isFav };
}

export function deletePrivateVidFromPlaylist(vidID, page) {
  return { type: playlistOperations.DELETE_VID, vidID, page };
}

export function slicePlaylist() {
  return { type: playlistOperations.SLICE };
}

export function randomizePlaylist() {
  return { type: playlistOperations.RANDOMIZE };
}

export function clearPlaylist() {
  return { type: playlistOperations.CLEAR };
}
