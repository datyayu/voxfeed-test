import React from "react";
import "./MessageClicksDescription.css";

export const MessageClicksDescription = ({
  clicks,
  text,
  alignLeft = false,
  topOnMobile = false
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
