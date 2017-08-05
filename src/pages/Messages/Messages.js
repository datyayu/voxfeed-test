import React from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";
import {
  Search,
  MessageList,
  MobileHeader,
  LoadingAnimation,
  LoadingError
} from "../../components";
import { ApplicationSelectors, MessagesSelectors } from "../../selectors";
import { ApplicationActions, MessagesActions } from "../../actions";
import "./Messages.css";

export const MessagesPageComponent = ({
  messages,
  showMenu,
  isFetchingData,
  fetchingError,
  searchQuery,
  toggleNav,
  openNav,
  closeNav,
  setActiveMessage,
  onQueryChange
}) =>
  <Swipeable
    onSwipingRight={openNav}
    onSwipingLeft={closeNav}
    className="messages-page"
  >
    <MobileHeader
      title="messages"
      showMenu={showMenu}
      onButtonClick={toggleNav}
    />

    <Search value={searchQuery} onChange={onQueryChange} />
    {isFetchingData
      ? <LoadingAnimation />
      : <MessageList messages={messages} onItemClick={setActiveMessage} />}

    {fetchingError && <LoadingError error={fetchingError} />}
  </Swipeable>;

function mapStateToProps(state) {
  return {
    fetchingError: ApplicationSelectors.hasFetchingFailed(state),
    isFetchingData: ApplicationSelectors.isFetchingData(state),
    showMenu: ApplicationSelectors.isSidenavActive(state),
    messages: MessagesSelectors.getMessages(state),
    searchQuery: MessagesSelectors.getSearchQuery(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav,
  openNav: ApplicationActions.openSidenav,
  closeNav: ApplicationActions.closeSidenav,
  setActiveMessage: MessagesActions.setActiveMessage,
  onQueryChange: MessagesActions.changeSearchQuery
};

export const MessagesPage = connect(mapStateToProps, mapDispatchToProps)(
  MessagesPageComponent
);
