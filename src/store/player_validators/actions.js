export const SET_IS_NEXT_PAGE = "SET_IS_NEXT_PAGE";
export const SET_IS_PRIV_CHECK = "SET_IS_PRIV_CHECK";

export function setIsNextPage(val) {
  return { type: SET_IS_NEXT_PAGE, val };
}

export function setIsPrivCheck(val) {
  return { type: SET_IS_PRIV_CHECK, val };
}
