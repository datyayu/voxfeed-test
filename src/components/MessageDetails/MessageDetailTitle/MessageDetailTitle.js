import React from "react";
import "./MessageDetailTitle.css";

export const MessageDetailTitle = ({ title }) =>
  <div className="message-detail-title">
    <span className="message-detail-title__bar" />
    <h2 className="message-detail-title__text">
      {title}
    </h2>
    <span className="message-detail-title__bar" />
  </div>;
