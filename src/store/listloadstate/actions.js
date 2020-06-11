export const SWITCH_LOAD = "SWITCH_LOAD";
export const LOAD_ERROR = "LOAD_ERROR";

export function updatePLstate(val) {
  return { type: SWITCH_LOAD, val };
}

export function loadError(val) {
  return { type: LOAD_ERROR, val };
}
