import React from "react";
import { MessageImpactPinLine } from "../MessageImpactPinLine";
import "./MessageImpactBigPin.css";

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
  </div>;
