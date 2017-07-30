import React from "react";
import * as Colors from "../../config/colors";

export const MessageAvatar = ({ avatar, username, read }) =>
  <div className="message-avatar">
    {!read && <div className="message-avatar__badge" />}

    <img
      className="message-avatar__image"
      src={avatar}
      alt={username}
      height="40px"
      width="40px"
    />

    <style jsx>{`
      .message-avatar {
        padding-left: 2em;
        position: relative;
      }

      .message-avatar__badge {
        background-color: ${Colors.MAIN_COLOR};
        border-radius: 50%;
        height: 9px;
        left: .5em;
        position: absolute;
        top: .75em;
        width: 9px;
      }

      .message-avatar__image {
        border-radius: 10%;
        margin-right: 1em;
      }
    `}</style>
  </div>;
