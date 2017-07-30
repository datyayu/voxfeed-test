import React, { Component } from "react";
import { Navbar, MobileHeader } from "./components";
import { MessagesPage } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false };
  }
  render() {
    const { showMenu } = this.state;
    const contentClasses = `main-content ${showMenu && "has-mobile-menu"}`;

    return (
      <div className="app">
        <Navbar showOnMobile={showMenu} />

        <div className={contentClasses}>
          <MobileHeader
            title="messages"
            showMenu={showMenu}
            onMenuClick={() => this.setState({ showMenu: !showMenu })}
          />

          <MessagesPage />
        </div>

        <style jsx>{`
          .app {
            display: flex;
            overflow: hidden;
            width: 100vw;
          }

          .main-content {
            box-sizing: border-box;
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
