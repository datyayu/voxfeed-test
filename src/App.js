import React from "react";
import { connect } from "react-redux";
import { ApplicationActions } from "./actions";
import { ApplicationSelectors, MessagesSelectors } from "./selectors";
import { Navbar } from "./components";
import { Routes } from "./routes";

const App = ({
  user,
  showNav = false,
  showDetail = false,
  notifications,
  toggleDetail
}) =>
  <div className="app">
    <Navbar notifications={notifications} showOnMobile={showNav} user={user} />

    <Routes showNav={showNav} />

    <style jsx>{`
      .app {
        display: flex;
        overflow: hidden;
        width: 100vw;
      }
    `}</style>
  </div>;

function mapStateToProps(state) {
  return {
    notifications: MessagesSelectors.getNotificationCount(state),
    showNav: ApplicationSelectors.isSidenavActive(state),
    showDetail: ApplicationSelectors.isDetailActive(state),
    user: ApplicationSelectors.getCurrentUser(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav,
  toggleDetail: ApplicationActions.toggleDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
