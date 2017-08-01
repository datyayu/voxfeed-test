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
        width: 100%;
        top: 2em !important;
        transform: translateX(50%) translateX(-9em);
      }
      .impact-big-pin__line {
        height: 6em !important;
      }
    `}</style>

    <style jsx>{`
      .impact-big-pin {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
      }

      .impact-big-pin__number {
        font-weight: bold;
        font-size: 1.5em;
        position: absolute;
        right: 0;
        transform: translateX(-50%) translateX(.8em);
        top: 1.5em;
        width: 100px;
        text-align: left;
      }

      .impact-big-pin__text {
        font-size: .7em;
        position: absolute;
        right: 0;
        transform: translateX(-50%) translateX(1.5em);
        width: 100px;
        top: 5.5em;
        text-align: left;
      }
    `}</style>
  </div>;
