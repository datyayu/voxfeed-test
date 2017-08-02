import React from "react";
import { connect } from "react-redux";
import { ApplicationActions } from "./actions";
import { ApplicationSelectors, MessagesSelectors } from "./selectors";
import { Navbar } from "./components";
import { MessagesPage, MessageDetailPage } from "./pages";

const App = ({
  user,
  showNav = false,
  showDetail = false,
  notifications,
  toggleDetail
}) => {
  const contentClasses = `main-content ${showNav && "has-mobile-menu"}`;

  return (
    <div className="app">
      <Navbar
        notifications={notifications}
        showOnMobile={showNav}
        user={user}
      />

      <div className={contentClasses}>
        <MessagesPage />

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
