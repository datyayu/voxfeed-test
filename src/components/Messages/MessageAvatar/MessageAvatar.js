import React from "react";
import "./MessageAvatar.css";

export const MessageAvatar = ({ avatar, username, read, campaign }) =>
  <div className="message-avatar">
    {!read && <div className="message-avatar__badge" />}

    {campaign &&
      campaign.logo &&
      <img
        src={campaign.logo}
        alt={campaign.name}
        height="20px"
        width="20px"
        className="message-avatar__campaign"
      />}

    <img
      className="message-avatar__image"
      src={avatar}
      alt={username}
      height="40px"
      width="40px"
    />
  </div>;
