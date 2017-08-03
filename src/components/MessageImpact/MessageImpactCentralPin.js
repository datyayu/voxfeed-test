import React from "react";
import { MessageImpactPinLine } from "./MessageImpactPinLine";

export const MessageImpactCentralPin = ({ className, number, text }) =>
  <div className={`impact-central-pin ${className}`}>
    <MessageImpactPinLine />
    <span className="impact-central-pin__number">
      {number}
    </span>
    <span className="impact-central-pin__text">
      {text}
    </span>

    <style jsx>{`
      .impact-central-pin {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .impact-central-pin__number {
        font-size: 1.2em;
        font-weight: bold;
      }

      .impact-central-pin__text {
        font-size: .7em;
      }
    `}</style>
  </div>;
