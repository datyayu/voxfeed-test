import React from "react";
import { NavbarLink } from "../NavbarLink";
import "./NavbarItem.css";

export const NavbarItem = ({ Icon, linkTo, exact, props, text = "" }) => {
  return (
    <div className="navbar-item">
      <NavbarLink to={linkTo} exact={exact} text={text}>
        <Icon {...props} />
      </NavbarLink>
    </div>
  );
};
