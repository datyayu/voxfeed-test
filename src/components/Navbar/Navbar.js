import React from "react";
import * as Colors from "../../config/colors";

import { DashboardIcon, VooxFeedIcon } from "../Icons";
import { NavbarItem } from "./NavbarItem";
import { NavbarUser } from "./NavbarUser";

export const Navbar = ({ user, notifications, showOnMobile = false }) => {
  const navbarClasses = `navbar ${showOnMobile && "show-mobile"}`;

  return (
    <div className={navbarClasses}>
      <VooxFeedIcon />
      <NavbarItem exact Icon={DashboardIcon} text="Inicio" linkTo="/" />
      {user &&
        <NavbarItem
          Icon={NavbarUser}
          text={user.name}
          props={{ user, notifications }}
          linkTo="/messages"
          isActive
        />}

      <style jsx>{`
        .navbar {
          background: ${Colors.NAVBAR_DEFAULT_BG};
          height: 100vh;
          left: 0;
          overflow: hidden;
          position: fixed;
          top: 0;
          transform: translateX(-100px);
          transition: 200ms transform ease-in-out;
          width: 100px;
          will-change: transform;
        }

        .navbar.show-mobile {
          transform: translateX(0);
        }

        @media screen and (min-width: 765px) {
          .navbar {
            position: static;
            transform: translateX(0);
            transition: none;
            will-change: none;
          }
        }
      `}</style>
    </div>
  );
};
