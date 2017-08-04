import React from "react";
import "./NavbarUser.css";

export const NavbarUser = ({ user, notifications = 10 }) => {
  return (
    <div className="navbar-user">
      {notifications > 0 &&
        <div className="navbar-user__badge">
          {notifications}
        </div>}

      <img
        className="navbar-user__image"
        src={user.avatarUrl}
        alt={user.name}
        height="40px"
        width="40px"
      />
    </div>
  );
};
