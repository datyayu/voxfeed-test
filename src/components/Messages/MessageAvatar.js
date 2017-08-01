import React from "react";
import * as Colors from "../../config/colors";

export const MessageAvatar = ({ avatar, username, read, campaign }) =>
  <div className="message-avatar">
    {!read && <div className="message-avatar__badge" />}

    <img
      src={campaign.logo}
      alt={campaign.name}
      height="20px"
      width="20px"
      className="message-avatar__campaign"
    />

    <img
      className="message-avatar__image"
      src={avatar}
      alt={username}
      height="40px"
      width="40px"
    />

    <style jsx>{`
      .message-avatar {
        padding-left: 0;
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

      .message-avatar__campaign {
        border: 2px solid white;
        border-radius: 50%;
        top: 25px;
        position: absolute;
        right: .5em;
      }

      .message-avatar__image {
        border-radius: 10%;
        margin-right: 1em;
      }

      @media screen and (min-width: 765px) {
        .message-avatar {
          padding-left: 2em;
        }
      }
    `}</style>
  </div>;
