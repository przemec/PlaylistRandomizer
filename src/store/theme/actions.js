export const CHANGE_THEME = "CHANGE_THEME";
export const SWAP_THEME = "SWAP_THEME";

export function changeTheme(key, typ) {
  return { type: CHANGE_THEME, key, typ };
}

export function swapTheme(typ) {
  return { type: SWAP_THEME, typ };
}
