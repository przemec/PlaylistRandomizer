export const resPlaylistsOperations = {
  SAVE: "SAVE_RESUMABLE_PLAYLIST",
  DELETE: "DELETE_RESUMABLE_PLAYLIST",
  CLEAR: "CLEAR_RESUMABLE_PLAYLISTS",
};

export function savePlaylist(id, list, index, page) {
  return { type: resPlaylistsOperations.SAVE, id, list, index, page };
}

export function deletePlaylist(id) {
  return { type: resPlaylistsOperations.DELETE, id };
}

export function clearPlaylists() {
  return { type: resPlaylistsOperations.CLEAR };
}
