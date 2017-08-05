import React from "react";
import PropTypes from "prop-types";
import { MessageImpactPinLine } from "../MessageImpactPinLine";
import "./MessageImpactCentralPin.css";

export const MessageImpactCentralPin = ({ className, number, text }) =>
  <div className={`impact-central-pin ${className}`}>
    <MessageImpactPinLine />
    <span className="impact-central-pin__number">
      {number}
    </span>
    <span className="impact-central-pin__text">
      {text}
    </span>
  </div>;

MessageImpactCentralPin.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
