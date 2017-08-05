import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavbarLink.css";

export const NavbarLink = ({ to, exact, text, children }) =>
  <NavLink to={to} exact={exact} className="navbar-link">
    {children}
    <span className="navbar-link__label">
      {text}
    </span>
  </NavLink>;

NavbarLink.propTypes = {
  children: PropTypes.any,
  exact: PropTypes.bool,
  text: PropTypes.string,
  to: PropTypes.string.isRequired
};
