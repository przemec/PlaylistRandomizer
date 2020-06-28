export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(typ, title) {
  return { type: SHOW_MODAL, typ, title };
}
export function hideModal() {
  return { type: HIDE_MODAL };
}
