import { playlistOperations as P } from "./actions";

const slice200 = (songs) => {
  const allPages = Math.floor(songs.length / 200);
  let pages = [];
  for (let i = 0; i <= allPages; i++) {
    let k = songs.filter((ev, index) => index >= i * 200 && index < i * 200 + 200);
    pages.push(k);
  }
  return pages;
};

const playlist = (state = { list: [], index: 0, page: 0 }, action) => {
  switch (action.type) {
    case P.LOAD_PLAYLIST:
      const pages = action.isbeingresumed ? action.list : slice200(action.list);
      return { ...state, list: pages, id: action.id, updated: action.updated };
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
    case P.DELETE_VID:
      const newlist = state.list[action.page].filter((e) => e.videoId !== action.vidID);
      state.list[action.page] = newlist;
      return state;
    case P.PAGE:
      return { ...state, page: action.page };
    case P.INDEX:
      return { ...state, index: action.index };
    case P.RESET:
      return { ...state, index: 0, page: 0 };
    case P.CLEAR:
      return { list: [] };
    default:
      return state;
  }
};

export default playlist;
