import React, { Component } from "react";
import { MessageContent } from "./MessageContent";
import { MessageAvatar } from "./MessageAvatar";
import * as Colors from "../../config/colors";

export class MessageItem extends Component {
  render() {
    const {
      content,
      username,
      campaign,
      avatar,
      date,
      isActive = false,
      read = false,
      onClick
    } = this.props;

    const itemClasses = `message-item ${isActive && "is-active"}`;

    return (
      <li className={itemClasses} onClick={onClick}>
        <MessageAvatar
          avatar={avatar}
          campaign={campaign}
          read={read || isActive}
          username={username}
        />

        <MessageContent
          campaignName={campaign.name}
          content={content}
          date={date}
          username={username}
        />

        <style jsx>{`
          .message-item {
            background: white;
            border-bottom: 1px solid ${Colors.HEADER_BORDER};
            cursor: pointer;
            display: flex;
            padding: 1.5em;
          }

          .message-item:hover {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
          }

          .message-item.is-active {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
            border-right: 4px solid ${Colors.MESSAGE_ACTIVE_BORDER};
          }

          @media screen and (min-width: 765px) {
            .message-item {
              padding: 2em;
            }
          }
        `}</style>
      </li>
    );
  }
}
