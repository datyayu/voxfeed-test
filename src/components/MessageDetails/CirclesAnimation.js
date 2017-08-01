import React from "react";
import * as Colors from "../../config/colors";

export const CirclesAnimation = ({ className }) =>
  <svg className={`circles-animation ${className}`} viewBox="0 0 583 223">
    <g fill="none">
      <ellipse
        id="oval-1"
        className="blue-circle"
        cx="292.5"
        cy="55"
        rx="47.5"
        ry="15"
      />
      <ellipse
        id="oval-2"
        className="blue-circle"
        cx="292"
        cy="59.5"
        rx="81"
        ry="25.5"
      />
      <ellipse
        id="oval-3"
        className="blue-circle"
        cx="293"
        cy="67"
        rx="123"
        ry="39"
      />
      <ellipse
        id="oval-4"
        className="blue-circle"
        cx="292.5"
        cy="77"
        rx="169.5"
        ry="57"
      />
      <ellipse
        id="oval-5"
        className="gray-circle"
        cx="293.5"
        cy="85.5"
        rx="215.5"
        ry="72.5"
      />
      <ellipse
        id="oval-6"
        className="gray-circle"
        cx="294"
        cy="100.5"
        rx="258"
        ry="92.5"
      />
      <ellipse
        id="oval-7"
        className="gray-circle"
        cx="292"
        cy="111"
        rx="288"
        ry="108"
      />
    </g>

    <style jsx>{`
      .circles-animation {
        min-width: 765px;
        margin-left: 50%;
        transform: translateX(-50%);
      }

      .blue-circle {
        animation: fade-in-main .5s ease-in-out;
        animation-fill-mode: forwards;
        will-change: opacity;
      }

      .gray-circle {
        animation: fade-in-light .5s ease-in-out;
        animation-fill-mode: forwards;
        will-change: opacity;
      }

      #oval-1 {
        animation-delay: 300ms;
      }
      #oval-2 {
        animation-delay: 275ms;
      }
      #oval-3 {
        animation-delay: 400ms;
      }
      #oval-4 {
        animation-delay: 550ms;
      }
      #oval-5 {
        animation-delay: 725ms;
        opacity: .6;
      }
      #oval-6 {
        animation-delay: 950ms;
        opacity: .4;
      }
      #oval-7 {
        animation-delay: 1200ms;
        opacity: .25;
      }

      @keyframes fade-in-main {
        from {
          stroke: white;
        }
        to {
          stroke: ${Colors.MAIN_COLOR};
        }
      }

      @keyframes fade-in-light {
        from {
          stroke: white;
        }
        to {
          stroke: ${Colors.SVG_LIGHT_CIRCLES};
        }
      }
    `}</style>
  </svg>;
