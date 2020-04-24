/* global gapi */

import React, { Component } from "react";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";
let m = [];
class App extends Component {
  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load("client", () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load("youtube", "v3", () => {
          this.setState({ gapiReady: true });
          console.log(
            gapi.client.youtube.channels.list({
              part: "snippet,contentDetails,statistics",
              id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            })
          );
        });
      });
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }
  execute() {
    return gapi.client.youtube.playlistItems
      .list({
        part: "snippet,contentDetails",
        maxResults: 50,
        playlistId: "PLkcsM8kKgr7Z6xpqX78ZgzEip4l96Sbux",
        pageToken: "CPQDEAA",
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          // console.log("Response", response);
          response.result.items.map((e) => m.push(e));
          console.log(m);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  render() {
    // if (this.state.gapiReady) {
    return (
      <div>
        <button onClick={this.execute}>exec</button>
      </div>
    );
    // }
  }
}

export default App;
