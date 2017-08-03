import React from "react";
import * as Colors from "../../config/colors";

export const MessageClicksDescription = ({
  clicks,
  text,
  alignLeft = false,
  topOnMobile = false
}) => {
  const leftClass = alignLeft && "align-left";
  const mobileClass = topOnMobile && "top-on-mobile";
  const alignClasses = `click-description ${leftClass} ${mobileClass}`;

  return (
    <div className={alignClasses}>
      <span className="click-description__line" />

      <span className="click-description__text">
        <span className="click-description__number">
          {clicks}
        </span>
        <span>
          {" "}{text}
        </span>
      </span>

      <style jsx>{`
        .click-description {
          display: flex;
          flex-direction: column;
          left: 55px;
          position: absolute;
          top: -1px;
          width: 35vw;
        }

        .align-left.click-description {
          left: initial;
          right: 55px;
        }

        .top-on-mobile.click-description {
          flex-direction: column-reverse;
          height: 3em;
          left: initial;
          right: 55px;
          top: -3.1em;
        }

        .click-description__line {
          border-top: 1px solid ${Colors.HEADER_BORDER};
          flex-shrink: 10;
          height: 0px;
          min-width: 1%;
          width: 100%;
        }

        .click-description__text {
          text-align: right;
          width: 100%;
        }

        .align-left .click-description__text,
        .top-on-mobile .click-description__text {
          text-align: left;
        }

        .click-description__number {
          font-size: 1.3em;
          font-weight: bold;
        }

        @media screen and (min-width: 765px) {
          .click-description {
            flex-direction: row;
            width: 20vw;
          }

          .align-left.click-description {
            flex-direction: column;
            width: 15vw;
          }

          .top-on-mobile.click-description {
            flex-direction: row;
            left: 55px;
            top: -1px;
            width: 20vw;
          }

          .click-description__line {
            flex-grow: 10;
            width: 50%;
          }

          .align-left .click-description__line {
            width: 100%;
          }

          .click-description__text {
            margin-left: 0.5em;
            margin-top: -.5em;
            text-align: left;
            width: 70%;
          }

          .top-on-mobile .click-description__text {
            margin-left: 0.5em;
            margin-top: -.5em;
          }

          .align-left .click-description__text {
            margin-left: 0em;
            margin-top: 0em;
          }
        }
      `}</style>
    </div>
  );
};
