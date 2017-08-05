import React from "react";
import PropTypes from "prop-types";
import { MessagePropType } from "../../../types";
import { MessageItem } from "../MessageItem";
import "./MessageList.css";

export const MessageList = ({ messages = [], onItemClick }) =>
  <div className="message-list">
    {messages.map((message, idx) =>
      <MessageItem key={idx} message={message} onClick={onItemClick} />
    )}
  </div>;

MessageList.propTypes = {
  messages: PropTypes.arrayOf(MessagePropType),
  onItemClick: PropTypes.func
};
