import React from "react";
import * as Colors from "../../config/colors";

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
        width="40px"
        height="40px"
        alt={user.name}
      />

      <style jsx>{`
        .navbar-user {
          position: relative;
          width: 100%;
        }

        .navbar-user__image {
          border: 2px solid ${Colors.NAVBAR_DEFAULT_BG};
          border-radius: 50%;
          display: block;
          margin: 0 auto .5em auto;
          width: 40px;
        }

        .navbar-user__badge {
          background-color: ${Colors.NAVBAR_ACTIVE_BG};
          border: 2px solid white;
          border-radius: 40%;
          color: white;
          font-size: .75em;
          height: 15px;
          min-width: 15px;
          padding: .2em .3em;
          position: absolute;
          right: .5em;
          text-align: center;
          top: 0em;
        }
      `}</style>
    </div>
  );
};
