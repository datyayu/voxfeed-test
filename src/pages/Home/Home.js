import React from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";
import { ApplicationSelectors } from "../../selectors";
import { ApplicationActions } from "../../actions";
import { MobileHeader, LoadingAnimation, LoadingError } from "../../components";
import "./Home.css";

export const HomePageComponent = ({
  showMenu,
  isFetchingData,
  fetchingError,
  toggleNav,
  openNav,
  closeNav
}) =>
  <Swipeable
    onSwipingRight={openNav}
    onSwipingLeft={closeNav}
    className="home-page"
  >
    <MobileHeader title="Home" showMenu={showMenu} onButtonClick={toggleNav} />
    <div className="home-page__content">
      <h1 className="home-page__text">FRONT END TEST</h1>
      {isFetchingData && <LoadingAnimation />}
      {fetchingError && <LoadingError error={fetchingError} />}
    </div>
  </Swipeable>;

function mapStateToProps(state) {
  return {
    fetchingError: ApplicationSelectors.hasFetchingFailed(state),
    isFetchingData: ApplicationSelectors.isFetchingData(state),
    showMenu: ApplicationSelectors.isSidenavActive(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav,
  openNav: ApplicationActions.openSidenav,
  closeNav: ApplicationActions.closeSidenav
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(
  HomePageComponent
);
