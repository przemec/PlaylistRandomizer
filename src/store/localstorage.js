export const loadState = () => {
  try {
    const localstate = localStorage.getItem("ytrandomizer");
    return localstate === null ? undefined : JSON.parse(localstate);
  } catch (err) {
    return undefined;
  }
};

export const savePlaylists = (state) => {
  try {
    let localstate = localStorage.getItem("ytrandomizer");
    localstate === null ? (localstate = {}) : (localstate = JSON.parse(localstate));
    const update = { ...localstate, playlists: state };
    const updateString = JSON.stringify(update);
    localStorage.setItem("ytrandomizer", updateString);
  } catch (err) {
    console.log(err);
  }
};

export const saveThemeKey = (key) => {
  try {
    let localstate = localStorage.getItem("ytrandomizer");
    localstate === null ? (localstate = {}) : (localstate = JSON.parse(localstate));
    const update = { ...localstate, theme: key };
    const updateString = JSON.stringify(update);
    localStorage.setItem("ytrandomizer", updateString);
  } catch (err) {}
};

export const clearState = () => {
  try {
    const localstate = localStorage.getItem("ytrandomizer");
    localstate !== null && localStorage.removeItem("ytrandomizer");
  } catch (err) {}
};
