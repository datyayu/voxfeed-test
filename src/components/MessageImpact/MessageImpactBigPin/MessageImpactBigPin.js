import React from "react";
import PropTypes from "prop-types";
import { MessageImpactPinLine } from "../MessageImpactPinLine";
import { MessageTooltip } from "../../MessageTooltip";
import "./MessageImpactBigPin.css";

export const MessageImpactBigPin = ({ className, number, text, description }) =>
  <div className={`impact-big-pin ${className}`}>
    <MessageImpactPinLine
      className="impact-big-pin__pin"
      lineClassName="impact-big-pin__line"
    />
    <span className="impact-big-pin__number">
      {number}
    </span>
    <span className="impact-big-pin__text">
      {text} <MessageTooltip text={description} />
    </span>
  </div>;

MessageImpactBigPin.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
