export const playlistsOperations = {
  ADD: "ADD_PLAYLIST",
  EDIT: "EDIT_PLAYLIST",
  CLEAR: "CLEAR_PLAYLISTS",
  TOGGLE_FAV: "TOGGLE_FAVOURITE",
  DELETE: "DELETE_PLAYLIST",
};

export function addPlaylist(id, list, listData) {
  return { type: playlistsOperations.ADD, id, list, listData };
}

export function editPlaylist(id, list, listData) {
  return { type: playlistsOperations.EDIT, id, list, listData };
}

export function toggleFavourite(id) {
  return { type: playlistsOperations.TOGGLE_FAV, id };
}

export function deletePlaylist(id) {
  return { type: playlistsOperations.DELETE, id };
}

export function clearPlaylists() {
  return { type: playlistsOperations.CLEAR };
}
