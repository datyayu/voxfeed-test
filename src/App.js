import React, { Component } from "react";
import { Navbar } from "./components";
import { MessagesPage, MessageDetailPage } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false, showDetail: true };
  }
  render() {
    const { showMenu, showDetail } = this.state;
    const contentClasses = `main-content ${showMenu && "has-mobile-menu"}`;

    return (
      <div className="app">
        <Navbar showOnMobile={showMenu} />

        <div className={contentClasses}>
          <MessagesPage
            showMenu={showMenu}
            onMenuClick={() => this.setState({ showMenu: !showMenu })}
            onItemClick={() =>
              this.setState({ showMenu: false, showDetail: true })}
          />
          <MessageDetailPage
            show={showDetail}
            onClose={() => this.setState({ showDetail: false })}
          />
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
            max-height: 100vh;
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
  }
}

export default App;
