import React from "react";
import { connect } from "react-redux";
import { Search, MessageList, MobileHeader } from "../../components";
import { ApplicationSelectors, MessagesSelectors } from "../../selectors";
import { ApplicationActions, MessagesActions } from "../../actions";
import "./Messages.css";

export const MessagesPageComponent = ({
  messages,
  showMenu,
  searchQuery,
  toggleNav,
  setActiveMessage,
  onQueryChange
}) =>
  <div className="messages-page">
    <MobileHeader
      title="messages"
      showMenu={showMenu}
      onButtonClick={toggleNav}
    />

    <Search value={searchQuery} onChange={onQueryChange} />
    <MessageList messages={messages} onItemClick={setActiveMessage} />
  </div>;

function mapStateToProps(state) {
  return {
    showMenu: ApplicationSelectors.isSidenavActive(state),
    messages: MessagesSelectors.getMessages(state),
    searchQuery: MessagesSelectors.getSearchQuery(state)
  };
}

const mapDispatchToProps = {
  toggleNav: ApplicationActions.toggleSidenav,
  setActiveMessage: MessagesActions.setActiveMessage,
  onQueryChange: MessagesActions.changeSearchQuery
};

export const MessagesPage = connect(mapStateToProps, mapDispatchToProps)(
  MessagesPageComponent
);
