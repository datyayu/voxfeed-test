import React from "react";
import PropTypes from "prop-types";
import { UserPropType } from "../../../types";
import { DashboardIcon, VoxFeedIcon } from "../../Icons";
import { NavbarItem } from "../NavbarItem";
import { NavbarUser } from "../NavbarUser";
import "./Navbar.css";

export const Navbar = ({ user, notifications, showOnMobile }) => {
  const navbarClasses = `navbar ${showOnMobile && "show-mobile"}`;

  return (
    <div className={navbarClasses}>
      <VoxFeedIcon />
      <NavbarItem exact Icon={DashboardIcon} text="Inicio" linkTo="/" />
      {user &&
        <NavbarItem
          Icon={NavbarUser}
          text={user.name}
          props={{ user, notifications }}
          linkTo="/messages"
          isActive
        />}
    </div>
  );
};

Navbar.propTypes = {
  user: UserPropType,
  notifications: PropTypes.number,
  showOnMobile: PropTypes.bool
};
