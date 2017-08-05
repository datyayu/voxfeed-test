import React from "react";
import PropTypes from "prop-types";
import { NavbarLink } from "../NavbarLink";
import "./NavbarItem.css";

export const NavbarItem = ({ Icon, linkTo, exact, props, text }) => {
  return (
    <div className="navbar-item">
      <NavbarLink to={linkTo} exact={exact} text={text}>
        <Icon {...props} />
      </NavbarLink>
    </div>
  );
};

NavbarItem.propTypes = {
  exact: PropTypes.bool,
  Icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  linkTo: PropTypes.string.isRequired,
  props: PropTypes.object,
  text: PropTypes.string
};
