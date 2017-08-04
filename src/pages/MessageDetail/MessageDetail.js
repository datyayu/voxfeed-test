import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Swipeable from "react-swipeable";
import { ApplicationSelectors, MessagesSelectors } from "../../selectors";
import { MobileHeader, MessageDetail } from "../../components";
import "./MessageDetail.css";

export const MessageDetailPageComponent = ({ message, show, closeDetail }) => {
  const pageClasses = `message-detail-page ${show && "active"}`;
  const title = message ? message.campaign.name : "";

  return (
    <Swipeable onSwipingRight={closeDetail}>
      <div className={pageClasses}>
        <MobileHeader hasBack onButtonClick={closeDetail} title={title} />
        <MessageDetail message={message} />
      </div>
    </Swipeable>
  );
};

function mapStateToProps(state) {
  return {
    message: MessagesSelectors.getActiveMessage(state),
    show: ApplicationSelectors.isDetailActive(state)
  };
}

const mapDispatchToProps = {
  closeDetail: () => push("/messages")
};

export const MessageDetailPage = connect(mapStateToProps, mapDispatchToProps)(
  MessageDetailPageComponent
);
