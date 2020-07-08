export const playlistsOperations = {
  ADD: "ADD_PLAYLIST",
  EDIT: "EDIT_PLAYLIST",
  CLEAR: "CLEAR_PLAYLISTS",
};

export function addPlaylist(id, list, listData) {
  return { type: playlistsOperations.ADD, id, list, listData };
}

export function editPlaylist(id, list, listData) {
  return { type: playlistsOperations.EDIT, id, list, listData };
}

export function clearPlaylists() {
  return { type: playlistsOperations.CLEAR };
}
