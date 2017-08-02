import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { ApplicationSelectors, MessagesSelectors } from "../selectors";
import { MobileHeader, MessageDetail } from "../components";
import * as Colors from "../config/colors";

const MessageDetailPageComponent = ({ message, show, onClose }) => {
  const pageClasses = `message-detail-page ${show && "is-active"}`;
  const title = message ? message.campaign.name : "Now loading";
  return (
    <div className={pageClasses}>
      <MobileHeader hasBack onButtonClick={onClose} title={title} />
      <MessageDetail message={message} />

      <style jsx>{`
        .message-detail-page {
          background: white;
          box-shadow: 0 0 16px 4px ${Colors.DARK_SHADOW};
          display: flex;
          flex-direction: column;
          height: 100vh;
          left: 0;
          position: fixed;
          top: 0;
          transition: 300ms transform ease-in-out;
          transform: translateX(120%);
          overflow-y: scroll;
          overflow-x: hidden;
          width: 100%;
          will-change: transform;
          z-index: 9;
        }

        .message-detail-page.is-active {
          transform: translateX(0);
        }

        @media screen and (min-width: 765px) {
          .message-detail-page {
            box-shadow: none;
            position: static;
            transform: translateX(0);
            width: 50%;
            z-index: 1;
          }
        }
      `}</style>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    message: MessagesSelectors.getActiveMessage(state),
    show: ApplicationSelectors.isDetailActive(state)
  };
}

const mapDispatchToProps = {
  onClose: () => push("/messages")
};

export const MessageDetailPage = connect(mapStateToProps, mapDispatchToProps)(
  MessageDetailPageComponent
);
