import React from "react";
import { gapi } from "gapi-script";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchScreen from "./routes/Search";
import List from "./routes/List";
const API_KEY = "AIzaSyBv9CFoSRPpUK11uwbfZLtu9pGDh91Ugaw";

const App = () => {
  const [gapiReady, updateGapiState] = React.useState(false);
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
    <BrowserRouter>
      <Switch>
        {gapiReady && (
          <>
            <Route path="/list/:id" component={List} />
            <Route exact path="/" component={SearchScreen} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
