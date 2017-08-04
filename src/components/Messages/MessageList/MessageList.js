import React from "react";
import { MessageItem } from "../MessageItem";
import "./MessageList.css";

export const MessageList = ({ messages = [], onItemClick }) =>
  <div className="message-list">
    {messages.map((message, idx) =>
      <MessageItem key={idx} message={message} onClick={onItemClick} />
    )}
  </div>;
