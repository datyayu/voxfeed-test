import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { ApplicationSelectors, MessagesSelectors } from "../../selectors";
import { MobileHeader, MessageDetail } from "../../components";
import "./MessageDetail.css";

export const MessageDetailPageComponent = ({ message, show, onClose }) => {
  const pageClasses = `message-detail-page ${show && "active"}`;
  const title = message ? message.campaign.name : "Now loading";

  return (
    <div className={pageClasses}>
      <MobileHeader hasBack onButtonClick={onClose} title={title} />
      <MessageDetail message={message} />
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
