export const playlistOperations = {
  LOAD_PART: "LOAD_PART",
  LOAD_PLAYLIST: "LOAD_PLAYLIST",
  SLICE: "SLICE_PLAYLIST",
  RANDOMIZE: "RANDOMIZE_PLAYLIST",
  CLEAR: "CLEAR_PLAYLIST",
};

export function loadPart(list) {
  return { type: playlistOperations.LOAD_PART, list };
}

export function loadPlaylist(list) {
  return { type: playlistOperations.LOAD_PLAYLIST, list };
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
