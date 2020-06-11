import { playlistOperations } from "./actions";

const slice200 = (songs) => {
  const allPages = Math.floor(songs.length / 200);
  let pages = [];
  for (let i = 0; i <= allPages; i++) {
    let k = songs.filter((ev, index) => index >= i * 200 && index < i * 200 + 200 && ev);
    pages.push(k);
  }
  return pages;
};

const playlist = (state = [], action) => {
  switch (action.type) {
    case playlistOperations.LOAD_PART:
      action.list.map((e) => (state = [...state, e]));
      return state;
    case playlistOperations.LOAD_PLAYLIST:
      state = action.list;
      return state;
    case playlistOperations.SLICE:
      const pages = slice200(state);
      state = pages;
      return state;
    case playlistOperations.RANDOMIZE:
      let allSongs = [];
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          allSongs.push(state[i][j]);
        }
      }
      allSongs.sort(() => Math.random() - 0.5);
      const slicedRandom = slice200(allSongs);
      state = slicedRandom;
      return state;
    case playlistOperations.CLEAR:
      state = [];
      return state;
    default:
      return state;
  }
};

export default playlist;
