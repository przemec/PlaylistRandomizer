import * as PS from "../../store/playlists/actions";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/listloadstate/actions";
import { store } from "../../store";
import { gapi } from "gapi-script";

const downloadPlaylistData = (id, action, resetPlayer) => {
  let pageToken = undefined;
  let listData = {};
  let listt = [];
  const dsp = store.dispatch;
  action === "refresh" && dsp(L.updatePLstate("refreshing"));
  const search = () => {
    !pageToken &&
      gapi.client.youtube.playlists
        .list({
          part: "snippet",
          id: id,
        })
        .then(
          function (res) {
            if (res.result.items[0]) {
              const { channelTitle, thumbnails, title, publishedAt } = res.result.items[0].snippet;
              listData = {
                author: channelTitle,
                thumbnail: thumbnails.standard.url,
                title,
                publishedAt,
              };
            }
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
        (res) => {
          // eslint-disable-next-line array-callback-return
          res.result.items.map((e) => {
            const {
              title,
              resourceId: { videoId },
              thumbnails,
            } = e.snippet;
            const item = {
              title,
              videoId,
              thumbnail: thumbnails && thumbnails.medium && thumbnails.medium.url,
            };
            if (e.contentDetails.videoPublishedAt && thumbnails) {
              listt = [...listt, item];
            }
          });
          if (res.result.nextPageToken) {
            pageToken = res.result.nextPageToken;
            search(id);
          } else {
            const d = new Date();
            const z = (number) => (number < 10 ? `0${number}` : number);
            const time = `${z(d.getDate())}/${z(d.getMonth() + 1)}/${d.getFullYear()}, ${z(d.getHours())}:${z(d.getMinutes())}:${z(
              d.getSeconds()
            )}`;
            dsp(P.loadPlaylist(listt, id, time));
            if (action === "add") {
              dsp(PS.addPlaylist(id, listt, listData));
            } else if (action === "refresh") {
              dsp(P.resetToZero());
              dsp(PS.editPlaylist(id, listt, listData));
              resetPlayer();
            }
            store.getState().settings.autoshuffle && dsp(P.randomizePlaylist());
            dsp(L.updatePLstate("loaded"));
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
