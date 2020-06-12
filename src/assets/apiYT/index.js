import * as PS from "../../store/playlists/actions";
import * as P from "../../store/playlist/actions";
import * as M from "../../store/modal/actions";
import * as L from "../../store/listloadstate/actions";
import { store } from "../../store";
import { gapi } from "gapi-script";

const downloadPlaylistData = (id, action) => {
  let pageToken = undefined;
  let listt = [];
  const dsp = store.dispatch;
  if (action === "refresh") {
    dsp(M.switchModal(true));
    dsp(L.updatePLstate(false));
    dsp(P.clearPlaylist());
  }
  const search = () => {
    !pageToken &&
      gapi.client.youtube.playlists
        .list({
          part: "snippet",
          id: id,
        })
        .then(
          function (res) {},
          function (err) {
            dsp(L.loadError(true));
          }
        );
    gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: id,
        pageToken: pageToken,
      })
      .then(
        async (res) => {
          dsp(P.loadPart(res.result.items));
          res.result.items.map((e) => (listt = [...listt, e]));
          if (res.result.nextPageToken) {
            pageToken = res.result.nextPageToken;
            search(id);
          } else {
            if (action === "add") {
              await dsp(PS.addPlaylist(id, listt));
              await dsp(P.slicePlaylist());
              await dsp(P.randomizePlaylist());
              await dsp(L.updatePLstate(true));
              await dsp(M.switchModal(false));
            } else if (action === "refresh") {
              await dsp(PS.editPlaylist(id, listt));
              //eslint-disable-next-line
              location.reload();
            }
          }
        },
        function (err) {
          dsp(L.loadError(true));
        }
      );
  };
  search();
};
export default downloadPlaylistData;
