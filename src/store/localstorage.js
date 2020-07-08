export const loadState = (key) => {
  try {
    const localstate = localStorage.getItem(key);
    return localstate === null ? undefined : JSON.parse(localstate);
  } catch (err) {
    return undefined;
  }
};

export const saveStateLocally = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
};

export const clearState = () => {
  try {
    const lists = localStorage.getItem("playlists");
    lists !== null && localStorage.removeItem("playlists");
    const theme = localStorage.getItem("theme");
    theme !== null && localStorage.removeItem("theme");
  } catch (err) {}
};
