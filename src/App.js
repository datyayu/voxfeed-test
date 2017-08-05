import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationActions } from "./actions";
import { ApplicationSelectors, MessagesSelectors } from "./selectors";
import { Navbar } from "./components";
import { Routes } from "./Routes";
import "./App.css";

class App extends Component {
  // Simulate fetching delay.
  async delayedFetch(includeDelay) {
    if (includeDelay) {
      const delay = Math.random(0, 1) * 5000; // 0 - 5 seconds random delay
      await new Promise((resolve, reject) => setTimeout(resolve, delay));
    }
    return fetch("/assets/data.json");
  }

  // When app is mounted, fetch the data
  componentDidMount() {
    this.props.fetchData();

    // Set to false to skip fake delay / loading animation.
    this.delayedFetch(true)
      .then(response => response.json())
      .then(data => this.props.dataFetchSuccess(data))
      .catch(error => this.props.dataFetchFail());
  }

  render() {
    const { user, showNav, notifications } = this.props;
    return (
      <div className="app">
        <Navbar
          notifications={notifications}
          showOnMobile={showNav}
          user={user}
        />

        <Routes showNav={showNav} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: MessagesSelectors.getNotificationCount(state),
    showNav: ApplicationSelectors.isSidenavActive(state),
    showDetail: ApplicationSelectors.isDetailActive(state),
    user: ApplicationSelectors.getCurrentUser(state)
  };
}

const mapDispatchToProps = {
  fetchData: ApplicationActions.fetchData,
  dataFetchSuccess: ApplicationActions.dataFetchSuccess,
  dataFetchFail: ApplicationActions.dataFetchFail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
