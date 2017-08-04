import React from "react";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import "./Routes.css";

import { HomePage, MessagesPage, MessageDetailPage } from "./pages";

export const history = createBrowserHistory();

export const Routes = ({ showNav = false }) =>
  <div className={`main-content ${showNav && "has-mobile-menu"}`}>
    <Route path="/" exact component={HomePage} />
    <Route path="/messages" component={MessagesPage} />
    <Route path="/messages" component={MessageDetailPage} />
  </div>;
