import React from "react";
import { MessageItem } from "./MessageItem";

export const MessageList = ({ messages = [], onItemClick }) =>
  <ul className="message-list">
    {messages.map((message, idx) =>
      <MessageItem key={idx} {...message} onClick={onItemClick} />
    )}

    <style jsx>{`
      .message-list {
        box-sizing: border-box;
        height: 100%;
        margin: 0;
        overflow: auto;
        padding: 0;
        width: 100%;
      }
    `}</style>
  </ul>;
