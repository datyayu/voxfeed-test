import React from "react";
import { MessagePropType } from "../../../types";
import { MessageInfo } from "../MessageInfo";
import { MessageText } from "../MessageText";
import "./MessageContent.css";

export const MessageContent = ({ message }) =>
  <div className="message-content">
    <MessageInfo
      date={message.date}
      username={message.user && message.user.name}
      campaignName={message.campaign && message.campaign.groupAd}
    />
    <MessageText content={message.content} />
    {message.image &&
      <img
        className="message-content__image"
        src={message.image}
        alt={message.content}
        width="100%"
      />}
  </div>;

MessageContent.propTypes = {
  message: MessagePropType
};
