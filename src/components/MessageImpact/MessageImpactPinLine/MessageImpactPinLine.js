import React from "react";
import "./MessageImpactPinLine.css";

export const MessageImpactPinLine = ({ className, lineClassName }) =>
  <div className={`impact-pin-line ${className}`}>
    <span className={`impact-pin-line__line ${lineClassName}`} />
    <span className="impact-pin-line__circle" />
  </div>;
