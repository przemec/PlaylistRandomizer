export const loadState = () => {
  try {
    const localstate = localStorage.getItem("reduxstate");
    return localstate === null ? undefined : JSON.parse(localstate);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const localstate = JSON.stringify(state);
    localStorage.setItem("reduxstate", localstate);
  } catch (err) {}
};
