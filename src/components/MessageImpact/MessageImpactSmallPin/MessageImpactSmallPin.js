import React from "react";
import PropTypes from "prop-types";
import { MessageImpactPinLine } from "../MessageImpactPinLine";
import "./MessageImpactSmallPin.css";

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
  </div>;

MessageImpactSmallPin.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
