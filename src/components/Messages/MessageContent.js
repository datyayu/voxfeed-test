import React from "react";
import { MessageInfo } from "./MessageInfo";
import { MessageText } from "./MessageText";

export const MessageContent = ({ message }) =>
  <div className="message-content">
    <MessageInfo
      date={message.date}
      username={message.user && message.user.name}
      campaignName={message.campaign && message.campaign.groupAd}
    />
    <MessageText content={message.content} />
    {message.image &&
      <img
        className="message-content__image"
        src={message.image}
        alt={message.content}
        width="100%"
      />}

    <style jsx>{`
      .message-content__image {
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
        margin-top: 1em;
      }
    `}</style>
  </div>;
