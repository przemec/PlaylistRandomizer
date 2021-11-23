export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SET_PLAYLIST_ID = "SET_PLAYLIST_ID";

export function showModal(typ, title) {
  return { type: SHOW_MODAL, typ, title };
}
export function hideModal() {
  return { type: HIDE_MODAL };
}
export function setPlaylistID(id) {
  return { type: SET_PLAYLIST_ID, id };
}
