import React from "react";
import * as Colors from "../../config/colors";

export const MessageDetailTitle = ({ title }) =>
  <div className="message-detail-title">
    <span className="message-detail-title__bar" />
    <h2 className="message-detail-title__text">
      {title}
    </h2>
    <span className="message-detail-title__bar" />

    <style jsx>{`
      .message-detail-title {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        min-height: 3em;
        margin: 1.5em 5%;
        position: relative;
        text-align: center;
      }

      .message-detail-title__text {
        font-size: 1.2em;
        font-weight: normal;
        margin: 0 .5em;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .message-detail-title__bar {
        border-bottom: 1px solid ${Colors.HEADER_BORDER};
        height: 1px;
        width: 50%;
      }
    `}</style>
  </div>;
