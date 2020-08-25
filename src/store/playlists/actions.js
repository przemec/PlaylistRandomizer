export const playlistsOperations = {
  ADD: "ADD_PLAYLIST",
  EDIT: "EDIT_PLAYLIST",
  CLEAR: "CLEAR_PLAYLISTS",
  TOGGLE_FAV: "TOGGLE_FAVOURITE",
  DELETE: "DELETE_PLAYLIST",
  DELETE_VID: "DELETE_PRIVATE_VID_FROM_LISTS",
};

export function addPlaylist(id, list, listData) {
  return { type: playlistsOperations.ADD, id, list, listData };
}

export function editPlaylist(id, list, listData) {
  return { type: playlistsOperations.EDIT, id, list, listData };
}

export function deletePrivateVidFromPlaylists(id, vidID) {
  return { type: playlistsOperations.DELETE_VID, id, vidID };
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
