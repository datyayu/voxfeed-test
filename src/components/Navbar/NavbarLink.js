import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as Colors from "../../config/colors";

export class NavbarLink extends Component {
  render = () => {
    const { to, exact, text, children } = this.props;

    return (
      <NavLink to={to} exact={exact} className="navbar-link">
        {children}
        <span className="navbar-link__label">
          {text}
        </span>

        <style jsx global>{`
          .navbar-link {
            box-sizing: border-box;
            cursor: pointer;
            display: block;
            height: 90px;
            margin: .25em 0;
            padding: .5em 10% 1em 10%;
            text-decoration: none;
            width: 100%;
          }

          .navbar-link:hover {
            background: ${Colors.NAVBAR_HOVER_BG};
            margin: .25em 10%;
            padding: .5em 0 1em 0;
            width: 80%;
          }

          .navbar-link.active,
          .navbar-link.active:hover {
            background: ${Colors.NAVBAR_ACTIVE_BG};
            color: white;
            margin: .25em 0;
            padding: .5em 10% 1em 10%;
            width: 100%;
          }

          .navbar-link__label {
            color: ${Colors.NAVBAR_ICON_DEFAULT};
            display: block;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }

          .navbar-link:hover .navbar-link__label,
          .navbar-link.active .navbar-link__label {
            color: ${Colors.NAVBAR_ICON_ACTIVE};
          }

          .navbar-link:hover svg g,
          .navbar-link.active svg g {
            fill: ${Colors.NAVBAR_ICON_ACTIVE};
          }

          .navbar-link.active img {
            border: 2px solid ${Colors.NAVBAR_ICON_ACTIVE};
          }
        `}</style>
      </NavLink>
    );
  };
}
