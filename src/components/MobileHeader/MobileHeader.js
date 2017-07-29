import React from "react";
import * as Colors from "../../config/colors";

import { MenuIcon } from "../Icons";
import { MobileHeaderBackButton } from "./MobileHeaderBackButton";

export const MobileHeader = ({
  title = "",
  hasBack = false,
  onMenuClick,
  onBackClick
}) => {
  const icon = hasBack
    ? <MobileHeaderBackButton className="header__icon" onClick={onBackClick} />
    : <MenuIcon className="header__icon" onClick={onMenuClick} />;

  return (
    <div className="header">
      {icon}
      <h1 className="header__title">
        {title}
      </h1>

      <style jsx global>{`
        .header {
          align-items: center;
          background-color: ${Colors.MOBILE_HEADER_BG};
          box-shadow: 1px 1px 2px 0px ${Colors.HEADER_BORDER};
          box-sizing: border-box;
          display: flex;
          height: 4em;
          justify-content: center;
          padding: 1em;
          position: relative;
          width: 100%;
          max-width: 100vw;
        }

        .header__title {
          box-sizing: border-box;
          font-size: 1.5em;
          font-weight: 600;
          padding: 0 5% 0 15%;
          margin: 0;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
          width: 100%;
        }

        .header__icon {
          cursor: pointer;
          left: 1em;
          position: absolute;
          top: 1em;
        }

        @media screen and (min-width: 765px) {
          .header {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
