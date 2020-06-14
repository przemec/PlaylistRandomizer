export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(typ) {
  return { type: SHOW_MODAL, typ };
}
export function hideModal() {
  return { type: HIDE_MODAL };
}
