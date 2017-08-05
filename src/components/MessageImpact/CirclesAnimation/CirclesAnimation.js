import React from "react";
import PropTypes from "prop-types";
import "./CirclesAnimation.css";

export const CirclesAnimation = ({ className }) =>
  <svg className={`circles-animation ${className}`} viewBox="0 0 583 223">
    <g fill="none">
      <ellipse
        id="oval-1"
        className="blue-circle"
        cx="292.5"
        cy="55"
        rx="47.5"
        ry="15"
      />
      <ellipse
        id="oval-2"
        className="blue-circle"
        cx="292"
        cy="59.5"
        rx="81"
        ry="25.5"
      />
      <ellipse
        id="oval-3"
        className="blue-circle"
        cx="293"
        cy="67"
        rx="123"
        ry="39"
      />
      <ellipse
        id="oval-4"
        className="blue-circle"
        cx="292.5"
        cy="77"
        rx="169.5"
        ry="57"
      />
      <ellipse
        id="oval-5"
        className="gray-circle"
        cx="293.5"
        cy="85.5"
        rx="215.5"
        ry="72.5"
      />
      <ellipse
        id="oval-6"
        className="gray-circle"
        cx="294"
        cy="100.5"
        rx="258"
        ry="92.5"
      />
      <ellipse
        id="oval-7"
        className="gray-circle"
        cx="292"
        cy="111"
        rx="288"
        ry="108"
      />
    </g>
  </svg>;

CirclesAnimation.propTypes = {
  className: PropTypes.string
};
