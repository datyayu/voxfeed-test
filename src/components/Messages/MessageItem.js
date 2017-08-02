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
    const {
      id,
      content,
      user,
      campaign,
      date,
      isActive = false,
      read = false
    } = this.props.message;

    return (
      <NavLink to={`/messages/${id}`} className="message-item">
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

        <style jsx global>{`
          .message-item {
            background: white;
            border-bottom: 1px solid ${Colors.HEADER_BORDER};
            border-right: 4px solid white;
            cursor: pointer;
            display: flex;
            padding: 1.5em;
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
              padding: 2em;
            }
          }
        `}</style>
      </NavLink>
    );
  }
}
