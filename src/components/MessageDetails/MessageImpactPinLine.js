import React from "react";
import * as Colors from "../../config/colors";

export const MessageImpactPinLine = ({ className, lineClassName }) =>
  <div className={`impact-pin-line ${className}`}>
    <span className="impact-pin-line__circle" />
    <span className={`impact-pin-line__line ${lineClassName}`} />

    <style jsx>{`
      .impact-pin-line {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .impact-pin-line__line,
      .impact-pin-line__circle {
        background: ${Colors.MAIN_COLOR};
        left: 50%;
        position: absolute;
        top: 2.5em;
      }

      .impact-pin-line__line {
        width: 2px;
        height: 4em;
      }

      .impact-pin-line__circle {
        border-radius: 50%;
        height: 6px;
        left: calc(50% - 2px);
        width: 6px;
      }
    `}</style>
  </div>;
