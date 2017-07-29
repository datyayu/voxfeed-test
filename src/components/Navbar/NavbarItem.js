import React from "react";
import * as Colors from "../../config/colors";
import { NavbarLink } from "./NavbarLink";

export const NavbarItem = ({ Icon, text = "", isActive }) => {
  const itemClasses = `navbar-item ${isActive && "is-active"}`;

  return (
    <div className={itemClasses}>
      <NavbarLink isActive={isActive}>
        <Icon />
        {text &&
          <span className="navbar-item__label">
            {text}
          </span>}
      </NavbarLink>

      <style jsx>{`
        .navbar-item {
          margin-top: 1em;
        }

        .navbar-item__label {
          color: ${Colors.NAVBAR_ICON_DEFAULT};
          display: block;
          text-align: center;
        }

        .navbar-item:hover .navbar-item__label,
        .navbar-item.is-active .navbar-item__label {
          color: ${Colors.NAVBAR_ICON_ACTIVE};
        }
      `}</style>
    </div>
  );
};
