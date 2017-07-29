import React, { Component } from "react";
import { Navbar, MobileHeader } from "./components";

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
            title="This is a very long title"
            showMenu={showMenu}
            onMenuClick={() => this.setState({ showMenu: !showMenu })}
          />
        </div>

        <style jsx>{`
          .app {
            display: flex;
            width: 100vw;
          }

          .main-content {
            width: 100%;
            transition: 200ms transform ease-in-out;
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
