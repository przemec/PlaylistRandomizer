import * as PS from "../../store/playlists/actions";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/listloadstate/actions";
import { store } from "../../store";
import { gapi } from "gapi-script";

const downloadPlaylistData = (id, action) => {
  let pageToken = undefined;
  let listData = {};
  let listt = [];
  const dsp = store.dispatch;
  dsp(P.clearPlaylist());
  if (action === "refresh") {
    dsp(L.updatePLstate(false));
  }
  const search = () => {
    !pageToken &&
      gapi.client.youtube.playlists
        .list({
          part: "snippet",
          id: id,
        })
        .then(
          function (res) {
            const { channelTitle, thumbnails, title, publishedAt } = res.result.items[0].snippet;
            listData = {
              author: channelTitle,
              thumbnail: thumbnails.standard.url,
              title,
              publishedAt,
            };
          },
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
          // eslint-disable-next-line array-callback-return
          const items = res.result.items.map((e) => {
            const item = {
              title: e.snippet.title,
              videoId: e.snippet.resourceId.videoId,
              addedToPlaylistAt: e.snippet.publishedAt,
              videoPublishedAt: e.contentDetails.videoPublishedAt,
              thumbnail: e.snippet.thumbnails && e.snippet.thumbnails.medium,
            };
            if (e.contentDetails.videoPublishedAt && e.snippet.thumbnails) {
              listt = [...listt, item];
              return item;
            }
          });
          dsp(P.loadPart(items));
          if (res.result.nextPageToken) {
            pageToken = res.result.nextPageToken;
            search(id);
          } else {
            if (action === "add") {
              await dsp(PS.addPlaylist(id, listt, listData));
              await dsp(P.slicePlaylist());
              await dsp(P.randomizePlaylist());
              await dsp(L.updatePLstate(true));
            } else if (action === "refresh") {
              await dsp(PS.editPlaylist(id, listt, listData));
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
