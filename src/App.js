import React from "react";
import { gapi } from "gapi-script";
import SearchBar from "./components/SearchBar";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";

const App = () => {
  let [gapiReady, updateGapiState] = React.useState(false);
  const loadYoutubeApi = () => {
    gapi.load("client", () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client.load("youtube", "v3", () => {
        updateGapiState(true);
      });
    });
  };
  React.useEffect(() => {
    loadYoutubeApi();
  });
  return (
    gapiReady && (
      <>
        <SearchBar />
      </>
    )
  );
};

export default App;
