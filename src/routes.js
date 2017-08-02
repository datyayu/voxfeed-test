import React from "react";
import { Route } from "react-router";
import { createBrowserHistory } from "history";

import { HomePage, MessagesPage, MessageDetailPage } from "./pages";

export const history = createBrowserHistory();

export const Routes = ({ showNav = false }) =>
  <div className={`main-content ${showNav && "has-mobile-menu"}`}>
    <Route path="/" exact component={HomePage} />
    <Route path="/messages" component={MessagesPage} />
    <Route path="/messages" component={MessageDetailPage} />

    <style jsx>{`
      .main-content {
        box-sizing: border-box;
        display: flex;
        height: 100%;
        min-height: 100vh;
        max-width: 100vw;
        transition: 200ms transform ease-in-out;
        width: 100%;
        will-change: transform;
      }

      .main-content.has-mobile-menu {
        transform: translateX(100px);
      }

      @media screen and (min-width: 765px) {
        .main-content.has-mobile-menu {
          transform: translateX(0);
        }
      }
    `}</style>
  </div>;
