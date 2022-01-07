import * as PS from "../../store/playlists/actions";
import * as P from "../../store/playlist/actions";
import * as L from "../../store/loadstate/actions";
import { store } from "../../store";
import { gapi } from "gapi-script";

const downloadPlaylistData = (id, action, resetPlayer) => {
  let pageToken = undefined;
  let listData = {};
  let songsArray = [];
  const dsp = store.dispatch;
  const savedlist = store.getState().playlists.find((e) => e.id === id).list;
  action === "refresh" && dsp(L.setPlaylistState("refreshing"));
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
              const { channelTitle: author, thumbnails, title, publishedAt } = res.result.items[0].snippet;
              const { url: thumbnail } = thumbnails.standard || thumbnails.high || thumbnails.medium || thumbnails.default;
              listData = {
                author,
                thumbnail,
                title,
                publishedAt,
                length: 0,
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
        async (res) => {
          let videosToCheckLength = [];
          // eslint-disable-next-line array-callback-return
          res.result.items.map((e) => {
            const {
              title,
              resourceId: { videoId },
              thumbnails,
            } = e.snippet;
            let item = {
              title,
              videoId,
              thumbnail: thumbnails && thumbnails.medium && thumbnails.medium.url,
            };
            if (e.contentDetails.videoPublishedAt && thumbnails) {
              if (action === "add") videosToCheckLength = [...videosToCheckLength, videoId];
              else if (action === "refresh") {
                const savedtime = savedlist.find((e) => e.videoId === videoId)?.duration;
                if (!savedtime) videosToCheckLength = [...videosToCheckLength, videoId];
                else {
                  item = { ...item, duration: savedtime };
                  listData.length += savedtime;
                }
              }
              songsArray = [...songsArray, item];
            }
          });
          videosToCheckLength.length !== 0 &&
            (await gapi.client.youtube.videos
              .list({
                part: "contentDetails",
                id: videosToCheckLength,
              })
              .then(
                (res) => {
                  // eslint-disable-next-line array-callback-return
                  res.result.items.map((e) => {
                    const { duration } = e.contentDetails;
                    const { id } = e;
                    const dur_tab = duration.slice(2, duration.length - 1).split("M");
                    const time = dur_tab[1] ? 60 * parseInt(dur_tab[0]) + parseInt(dur_tab[1]) : parseInt(dur_tab[0]);
                    listData.length += time;
                    songsArray = songsArray.map((item) => (item.videoId === id ? { ...item, duration: time } : item));
                  });
                },
                function (err) {
                  dsp(L.loadError(true));
                }
              ));
          if (res.result.nextPageToken) {
            pageToken = res.result.nextPageToken;
            search(id);
          } else {
            const d = new Date();
            const z = (number) => (number < 10 ? `0${number}` : number);
            const time = `${z(d.getDate())}/${z(d.getMonth() + 1)}/${d.getFullYear()}, ${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
            dsp(P.loadPlaylist(songsArray, id, time));
            if (action === "add") {
              dsp(PS.addPlaylist(id, songsArray, listData));
            } else if (action === "refresh") {
              dsp(P.resetToZero());
              dsp(PS.editPlaylist(id, songsArray, listData));
              resetPlayer();
            }
            store.getState().settings.autoshuffle && dsp(P.randomizePlaylist());
            dsp(L.setPlaylistState("loaded"));
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
