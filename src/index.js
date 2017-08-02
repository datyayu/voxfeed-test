import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { withRouter } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import App from "./App";
import { history } from "./routes";
import "./index.css";

const ConnectedApp = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
