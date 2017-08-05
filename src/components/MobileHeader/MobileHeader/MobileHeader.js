import React from "react";
import PropTypes from "prop-types";
import { MenuIcon } from "../../Icons";
import { MobileHeaderBack } from "../MobileHeaderBack";
import "./MobileHeader.css";

export const MobileHeader = ({ title, hasBack, onButtonClick }) => {
  const icon = hasBack
    ? <MobileHeaderBack className="header__icon" onClick={onButtonClick} />
    : <MenuIcon className="header__icon" onClick={onButtonClick} />;

  return (
    <div className="header">
      {icon}
      <h1 className="header__title">
        {title}
      </h1>
    </div>
  );
};

MobileHeader.propTypes = {
  title: PropTypes.string,
  hasBack: PropTypes.bool,
  onButtonClick: PropTypes.func
};
