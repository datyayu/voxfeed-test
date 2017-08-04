import React from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipeable";
import { Search, MessageList, MobileHeader } from "../../components";
import { ApplicationSelectors, MessagesSelectors } from "../../selectors";
import { ApplicationActions, MessagesActions } from "../../actions";
import "./Messages.css";

export const MessagesPageComponent = ({
  messages,
  showMenu,
  searchQuery,
  toggleNav,
  openNav,
  closeNav,
  setActiveMessage,
  onQueryChange
}) =>
  <Swipeable onSwipingRight={openNav} onSwipingLeft={closeNav}>
    <div className="messages-page">
      <MobileHeader
        title="messages"
        showMenu={showMenu}
        onButtonClick={toggleNav}
      />

      <Search value={searchQuery} onChange={onQueryChange} />
      <MessageList messages={messages} onItemClick={setActiveMessage} />
    </div>
  </Swipeable>;

function mapStateToProps(state) {
  return {
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
