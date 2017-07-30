import React from "react";
import * as Colors from "../../config/colors";

export const MessageInfo = ({ date, username, campaignName }) =>
  <div className="message-info">
    <span className="message-info__text">{username}</span>
    ·
    <span className="message-info__text">{campaignName}</span>
    ·
    <span className="message-info__text">{date}</span>
    <style jsx>{`
      .message-info {
        color: ${Colors.LIGHT_TEXT};
        font-size: .8em;
        margin-bottom: .5em;
      }

      .message-info__text:first-child {
        padding-left: 0;
      }

      .message-info__text {
        padding: 0 .75em;
      }
    `}</style>
  </div>;
