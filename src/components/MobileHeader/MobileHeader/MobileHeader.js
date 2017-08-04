import React from "react";
import { MenuIcon } from "../../Icons";
import { MobileHeaderBack } from "../MobileHeaderBack";
import "./MobileHeader.css";

export const MobileHeader = ({ title, onButtonClick, hasBack = false }) => {
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
