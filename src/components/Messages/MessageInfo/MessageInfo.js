import React from "react";
import PropTypes from "prop-types";
import "./MessageInfo.css";

export const MessageInfo = ({ date, username, campaignName }) =>
  <div className="message-info">
    <span className="message-info__text">{username}</span>
    ·
    {campaignName &&
      <span>
        <span className="message-info__text"> {campaignName}</span> ·
      </span>}
    <span className="message-info__text">{date}</span>
  </div>;

MessageInfo.propTypes = {
  date: PropTypes.string,
  username: PropTypes.string,
  campaignName: PropTypes.string
};
