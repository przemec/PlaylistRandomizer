import React from "react";
import { gapi } from "gapi-script";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchScreen from "./routes/Search";
import List from "./routes/List";
import AppBar from "./components/AppBar";
import { Provider } from "react-redux";
import { store } from "./store";
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
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {gapiReady && (
            <>
              <AppBar />
              <Route path="/list/:id" component={List} />
              <Route exact path="/" component={SearchScreen} />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
