import React from "react";
import { connect } from "react-redux";
import { Search, MessageList, MobileHeader } from "../components";
import { ApplicationSelectors, MessagesSelectors } from "../selectors";
import { ApplicationActions, MessagesActions } from "../actions";
import * as Colors from "../config/colors";

const MessagesPageComponent = ({
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

    <style jsx>{`
      .messages-page {
        background: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
      }

      @media screen and (min-width: 765px) {
        .messages-page {
          border-right: 1px solid ${Colors.HEADER_BORDER};
          width: 50%;
        }
      }
    `}</style>
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
