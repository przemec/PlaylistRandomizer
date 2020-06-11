export const playlistsOperations = {
  ADD: "ADD_PLAYLIST",
  EDIT: "EDIT_PLAYLIST",
  CLEAR: "CLEAR_PLAYLISTS",
};

export function addPlaylist(id, list) {
  return { type: playlistsOperations.ADD, id, list };
}

export function editPlaylist(id, list) {
  return { type: playlistsOperations.EDIT, id, list };
}

export function clearPlaylists() {
  return { type: playlistsOperations.CLEAR };
}
