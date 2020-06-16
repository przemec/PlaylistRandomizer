export const loadState = () => {
  try {
    const localstate = localStorage.getItem("reduxstate");
    return localstate === null ? undefined : JSON.parse(localstate);
  } catch (err) {
    return undefined;
  }
};

export const savePlaylists = (state) => {
  try {
    let localstate = localStorage.getItem("reduxstate");
    localstate === null ? (localstate = {}) : (localstate = JSON.parse(localstate));
    const update = { ...localstate, playlists: state };
    const updateString = JSON.stringify(update);
    localStorage.setItem("reduxstate", updateString);
  } catch (err) {
    console.log(err);
  }
};

export const saveThemeKey = (key) => {
  try {
    let localstate = localStorage.getItem("reduxstate");
    localstate === null ? (localstate = {}) : (localstate = JSON.parse(localstate));
    const update = { ...localstate, currenttheme: key };
    const updateString = JSON.stringify(update);
    localStorage.setItem("reduxstate", updateString);
  } catch (err) {}
};

export const clearState = () => {
  try {
    const localstate = localStorage.getItem("reduxstate");
    localstate !== null && localStorage.removeItem("reduxstate");
  } catch (err) {}
};
