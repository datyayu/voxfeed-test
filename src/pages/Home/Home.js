import React from "react";
import { connect } from "react-redux";
import { ApplicationSelectors } from "../../selectors";
import { ApplicationActions } from "../../actions";
import { MobileHeader } from "../../components";
import "./Home.css";

export const HomePageComponent = ({ showMenu, toggleNav }) =>
  <div className="home-page">
    <MobileHeader title="Home" showMenu={showMenu} onButtonClick={toggleNav} />
    <h1>HELLO</h1>
  </div>;

function mapStateToProps(state) {
  return {
    showMenu: ApplicationSelectors.isSidenavActive(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(
  HomePageComponent
);
