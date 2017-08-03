import React from "react";
import { MessageImpactPinLine } from "./MessageImpactPinLine";

export const MessageImpactBigPin = ({ className, number, text }) =>
  <div className={`impact-big-pin ${className}`}>
    <MessageImpactPinLine
      className="impact-big-pin__pin"
      lineClassName="impact-big-pin__line"
    />
    <span className="impact-big-pin__number">
      {number}
    </span>
    <span className="impact-big-pin__text">
      {text}
    </span>

    <style jsx global>{`
      .impact-big-pin__pin {
        right: 0 !important;
        top: 2em !important;
        transform: translateX(50%) translateX(-9em);
        width: 100%;
      }

      .impact-big-pin__line {
        height: 6em !important;
      }
    `}</style>

    <style jsx>{`
      .impact-big-pin {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
      }

      .impact-big-pin__number {
        font-size: 1.5em;
        font-weight: bold;
        position: absolute;
        right: 0;
        text-align: left;
        top: 1.5em;
        transform: translateX(-50%) translateX(.8em);
        width: 100px;
      }

      .impact-big-pin__text {
        font-size: .7em;
        position: absolute;
        right: 0;
        text-align: left;
        top: 5.5em;
        transform: translateX(-50%) translateX(1.5em);
        width: 100px;
      }
    `}</style>
  </div>;
