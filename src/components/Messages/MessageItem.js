import React, { Component } from "react";
import { MessageContent } from "./MessageContent";
import { MessageAvatar } from "./MessageAvatar";
import * as Colors from "../../config/colors";

export class MessageItem extends Component {
  handleClick = () => {
    const { onClick, message } = this.props;
    onClick(message.id);
  };

  render() {
    const {
      content,
      user,
      campaign,
      date,
      isActive = false,
      read = false
    } = this.props.message;

    const itemClasses = `message-item ${isActive && "is-active"}`;

    return (
      <li className={itemClasses} onClick={this.handleClick}>
        <MessageAvatar
          avatar={user.avatarUrl}
          campaign={campaign}
          read={read || isActive}
          username={user.name}
        />

        <MessageContent
          campaignName={campaign.groupAd}
          content={content}
          date={date}
          username={user.name}
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
