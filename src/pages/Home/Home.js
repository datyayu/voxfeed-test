import React from "react";
import { connect } from "react-redux";
import { ApplicationSelectors } from "../../selectors";
import { ApplicationActions } from "../../actions";
import { MobileHeader } from "../../components";
import "./Home.css";

export const HomePageComponent = ({ showMenu, toggleNav }) =>
  <div className="home-page">
    <MobileHeader title="Home" showMenu={showMenu} onButtonClick={toggleNav} />
    <div className="home-page__content">
      <h1 className="home-page__text">FRONT END TEST</h1>
    </div>
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
