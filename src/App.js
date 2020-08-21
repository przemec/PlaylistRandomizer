import React from "react";
import { gapi } from "gapi-script";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import SearchScreen from "./routes/Search";
import List from "./routes/List";
import AppBar from "./components/AppBar";
import Modal from "./modules/Modal";
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
  const location = useLocation();
  const history = useHistory();
  React.useEffect(() => {
    loadYoutubeApi();
    if (!/\/list\/\S+/.test(location.pathname) && location.pathname !== "/") {
      history.push("/");
    } else if (/\/list\/\S+/.test(location.pathname) && location.pathname !== "/") {
      const splitPathname = location.pathname.split("/");
      if (!/\/list\/\S+\/continue/.test(location.pathname) && /\/list\/\S+\/\S+/.test(location.pathname)) {
        const newLocation = `/list/${splitPathname[2]}`;
        history.push(newLocation);
      } else if (/\/list\/\S+\/continue/.test(location.pathname) && /\/list\/\S+\/continue\S+/.test(location.pathname)) {
        const newLocation = `/list/${splitPathname[2]}/continue`;
        history.push(newLocation);
      }
    }
  });
  return (
    <Switch>
      {gapiReady && (
        <>
          <AppBar />
          <Modal />
          <Route exact path="/list/:id/:isresumed" component={List} />
          <Route exact path="/list/:id" component={List} />
          <Route exact path="/" component={SearchScreen} />
        </>
      )}
    </Switch>
  );
};

export default App;
