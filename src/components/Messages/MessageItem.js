import React, { Component } from "react";
import { MessageContent } from "./MessageContent";
import { MessageAvatar } from "./MessageAvatar";
import * as Colors from "../../config/colors";

export class MessageItem extends Component {
  render() {
    const {
      content,
      username,
      campaignName,
      avatar,
      date,
      isActive = false,
      read = false
    } = this.props;

    const itemClasses = `message-item ${isActive && "is-active"}`;

    return (
      <li className={itemClasses}>
        <MessageAvatar
          username={username}
          avatar={avatar}
          read={read || isActive}
        />

        <MessageContent
          content={content}
          username={username}
          campaignName={campaignName}
          date={date}
        />

        <style jsx>{`
          .message-item {
            border-bottom: 1px solid ${Colors.HEADER_BORDER};
            cursor: pointer;
            display: flex;
            padding: 1.5em 2em;
          }

          .message-item:hover {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
          }

          .message-item.is-active {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
            border-right: 4px solid ${Colors.MESSAGE_ACTIVE_BORDER};
          }
        `}</style>
      </li>
    );
  }
}
