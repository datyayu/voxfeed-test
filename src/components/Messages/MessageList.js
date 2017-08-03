import React from "react";
import { MessageItem } from "./MessageItem";
import * as Colors from "../../config/colors";

export const MessageList = ({ messages = [], onItemClick }) =>
  <div className="message-list">
    {messages.map((message, idx) =>
      <MessageItem key={idx} message={message} onClick={onItemClick} />
    )}

    <style jsx>{`
      .message-list {
        background: white;
        box-sizing: border-box;
        border-right: 1px solid ${Colors.HEADER_BORDER};
        height: 100%;
        margin: 0;
        overflow-y: auto;
        padding: 0;
        width: 100%;
        z-index: 2;
      }
    `}</style>
  </div>;
