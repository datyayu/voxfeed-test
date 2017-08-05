import React from "react";
import { NavLink } from "react-router-dom";
import { MessagePropType } from "../../../types";
import { MessageContent } from "../MessageContent";
import { MessageAvatar } from "../MessageAvatar";
import "./MessageItem.css";

export const MessageItem = ({ message }) =>
  <NavLink to={`/messages/${message.id}`} className="message-item">
    <MessageAvatar
      avatar={message.user && message.user.avatarUrl}
      campaign={message.campaign}
      read={message.read || message.isActive}
      username={message.user && message.user.name}
    />

    <MessageContent message={message} />
  </NavLink>;

MessageItem.propTypes = {
  message: MessagePropType
};
