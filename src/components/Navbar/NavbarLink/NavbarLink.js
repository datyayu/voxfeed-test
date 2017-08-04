import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLink.css";

export const NavbarLink = ({ to, exact, text, children }) =>
  <NavLink to={to} exact={exact} className="navbar-link">
    {children}
    <span className="navbar-link__label">
      {text}
    </span>
  </NavLink>;
