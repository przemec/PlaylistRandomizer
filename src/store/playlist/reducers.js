import { playlistOperations as P } from "./actions";

const slice200 = (songs) => {
  const allPages = Math.floor(songs.length / 200);
  let pages = [];
  for (let i = 0; i <= allPages; i++) {
    let k = songs.filter((ev, index) => index >= i * 200 && index < i * 200 + 200 && ev);
    pages.push(k);
  }
  return pages;
};

const playlist = (state = { list: [] }, action) => {
  switch (action.type) {
    case P.LOAD_PART:
      action.list.map((e) => (state.list = [...state.list, e]));
      return state;
    case P.LOAD_PLAYLIST:
      return { ...state, list: action.list, id: action.id, updated: action.updated, isFav: action.isFav };
    case P.SLICE:
      const pages = slice200(state.list);
      return { ...state, list: pages };
    case P.RANDOMIZE:
      let allSongs = [];
      for (let i = 0; i < state.list.length; i++) {
        for (let j = 0; j < state.list[i].length; j++) {
          allSongs.push(state.list[i][j]);
        }
      }
      allSongs.sort(() => Math.random() - 0.5);
      allSongs.sort(() => Math.random() - 0.5);
      const slicedRandom = slice200(allSongs);
      return { ...state, list: slicedRandom };
    case P.CLEAR:
      return { list: [] };
    default:
      return state;
  }
};

export default playlist;
