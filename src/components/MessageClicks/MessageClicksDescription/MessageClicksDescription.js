import React from "react";
import PropTypes from "prop-types";
import "./MessageClicksDescription.css";

export const MessageClicksDescription = ({
  clicks,
  text,
  alignLeft,
  topOnMobile
}) => {
  const leftClass = alignLeft && "align-left";
  const mobileClass = topOnMobile && "top-on-mobile";
  const alignClasses = `click-description ${leftClass} ${mobileClass}`;

  return (
    <div className={alignClasses}>
      <span className="click-description__line" />

      <span className="click-description__text">
        <span className="click-description__number">
          {clicks}
        </span>
        <span>
          {" "}{text}
        </span>
      </span>
    </div>
  );
};

MessageClicksDescription.propTypes = {
  clicks: PropTypes.number,
  text: PropTypes.string,
  alignLeft: PropTypes.bool,
  topOnMobile: PropTypes.bool
};
