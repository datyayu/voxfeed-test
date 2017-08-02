import React from "react";
import { NavbarLink } from "./NavbarLink";

export const NavbarItem = ({ Icon, linkTo, exact, props, text = "" }) => {
  return (
    <div className="navbar-item">
      <NavbarLink to={linkTo} exact={exact} text={text}>
        <Icon {...props} />
      </NavbarLink>

      <style jsx>{`
        .navbar-item {
          margin-top: 1em;
        }
      `}</style>
    </div>
  );
};
