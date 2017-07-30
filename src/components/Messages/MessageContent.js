import React from "react";
import { MessageInfo } from "./MessageInfo";
import { MessageText } from "./MessageText";

export const MessageContent = ({ date, username, campaignName, content }) =>
  <div className="message_item__content">
    <MessageInfo date={date} username={username} campaignName={campaignName} />
    <MessageText content={content} />
  </div>;
