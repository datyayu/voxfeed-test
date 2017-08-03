import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MessageContent } from "./MessageContent";
import { MessageAvatar } from "./MessageAvatar";
import * as Colors from "../../config/colors";

export class MessageItem extends Component {
  handleClick = () => {
    const { onClick, message } = this.props;
    onClick(message.id);
  };

  render() {
    const { message } = this.props;

    return (
      <NavLink to={`/messages/${message.id}`} className="message-item">
        <MessageAvatar
          avatar={message.user && message.user.avatarUrl}
          campaign={message.campaign}
          read={message.read || message.isActive}
          username={message.user && message.user.name}
        />

        <MessageContent message={message} />

        <style jsx global>{`
          .message-item {
            background: white;
            border-bottom: 1px solid ${Colors.HEADER_BORDER};
            border-right: 4px solid white;
            cursor: pointer;
            display: flex;
            padding: 0.5em 1.5em 1.5em;
            text-decoration: none;
          }

          .message-item:hover {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
            border-right: 4px solid ${Colors.MESSAGE_ACTIVE_BG};
          }

          .message-item.active {
            background-color: ${Colors.MESSAGE_ACTIVE_BG};
            border-right: 4px solid ${Colors.MESSAGE_ACTIVE_BORDER};
          }

          @media screen and (min-width: 765px) {
            .message-item {
              padding: 1.5em 2em 2em;
            }
          }
        `}</style>
      </NavLink>
    );
  }
}
