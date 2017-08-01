import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationActions } from "./actions";
import { ApplicationSelectors } from "./selectors";
import { Navbar } from "./components";
import { MessagesPage, MessageDetailPage } from "./pages";

const App = ({
  showNav = false,
  showDetail = false,
  toggleNav,
  toggleDetail
}) => {
  const contentClasses = `main-content ${showNav && "has-mobile-menu"}`;

  return (
    <div className="app">
      <Navbar showOnMobile={showNav} />

      <div className={contentClasses}>
        <MessagesPage
          showNav={showNav}
          onMenuClick={toggleNav}
          onItemClick={toggleDetail}
        />
        <MessageDetailPage show={showDetail} onClose={toggleDetail} />
      </div>

      <style jsx>{`
        .app {
          display: flex;
          overflow: hidden;
          width: 100vw;
        }

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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    showNav: ApplicationSelectors.isSidenavActive(state),
    showDetail: ApplicationSelectors.isDetailActive(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav,
  toggleDetail: ApplicationActions.toggleDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
