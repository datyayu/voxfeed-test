import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationActions } from "./actions";
import { ApplicationSelectors, MessagesSelectors } from "./selectors";
import { Navbar } from "./components";
import { Routes } from "./Routes";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();

    fetch("/assets/data.json")
      .then(response => response.json())
      .then(data => this.props.dataFetchSuccess(data))
      .catch(error => this.props.dataFetchFail(error));
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
