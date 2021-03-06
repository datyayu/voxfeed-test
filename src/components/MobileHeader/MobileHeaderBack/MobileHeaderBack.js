import React from "react";
import PropTypes from "prop-types";
import "./MobileHeaderBack.css";

export const MobileHeaderBack = ({ className, onClick }) =>
  <div className={`back-button ${className}`} onClick={onClick}>
    <span className="back-button__arrow">&lt;</span>
    <span className="back-button__text">BACK</span>
  </div>;

MobileHeaderBack.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
