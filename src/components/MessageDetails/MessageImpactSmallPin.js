import React from "react";
import { MessageImpactPinLine } from "./MessageImpactPinLine";

export const MessageImpactSmallPin = ({ className, number, text }) =>
  <div className={`impact-small-pin ${className}`}>
    <MessageImpactPinLine
      className="impact-small-pin__pin"
      lineClassName="impact-small-pin__line"
    />
    <span className="impact-small-pin__number">
      {number}
    </span>
    <span className="impact-small-pin__text">
      {text}
    </span>

    <style jsx global>{`
      .impact-small-pin__pin {
        right: 0 !important;
        width: 100%;
        top: 2em !important;
        transform: translateX(50%) translateX(3em);
      }
      .impact-small-pin__line {
        height: 3em !important;
      }
    `}</style>

    <style jsx>{`
      .impact-small-pin {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .impact-small-pin__number {
        font-weight: bold;
        font-size: 1.2em;
        position: absolute;
        right: 0;
        width: 100px;
        transform: translateX(-50%) translateX(11em);
        text-align: left;
        top: 2em;
      }

      .impact-small-pin__text {
        font-size: .7em;
        position: absolute;
        right: 0;
        transform: translateX(-50%) translateX(14em);
        top: 5.5em;
      }
    `}</style>
  </div>;
