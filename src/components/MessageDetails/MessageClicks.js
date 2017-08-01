import React from "react";
import { MessageClickDescription } from "./MessageClickDescription";
import * as Colors from "../../config/colors";

export const MessageClicks = ({ total = 0, unique = 0, payed = 0 }) => {
  const uniqueHeight = `${unique / total * 200}px`;
  const payedHeight = `${payed / total * 200}px`;

  return (
    <div className="message-clicks">
      <div className="message-clicks__bar message-clicks__total">
        <MessageClickDescription clicks={total} text="click totales" />

        <div
          className="message-clicks__bar message-clicks__unique"
          style={{ height: uniqueHeight }}
        >
          <MessageClickDescription
            clicks={unique}
            text="click únicos"
            topOnMobile
          />
        </div>

        <div
          className="message-clicks__bar message-clicks__payed"
          style={{ height: payedHeight }}
        >
          <MessageClickDescription
            clicks={payed}
            text="click pagados"
            alignLeft
          />
        </div>
      </div>

      <style jsx>{`
      .message-clicks {
        max-width: 100%;
        box-sizing: border-box;
      }

      .message-clicks__bar {
        bottom: 0;
        left: 0;
        position: absolute;
        transform-origin: bottom;
        width: 50px;
        will-change: transform;
      }

      .message-clicks__total {
        animation: grow 1s ease-in-out;
        background: ${Colors.TOTAL_CLICKS_BAR};
        height: 200px;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
      }

      .message-clicks__unique {
        background: ${Colors.UNIQUE_CLICKS_BAR};
        animation: grow 1.15s ease-in-out;
      }

      .message-clicks__payed {
        background: ${Colors.PAYED_CLICKS_BAR};
        animation: grow 1.25s ease-in-out;
      }

      @keyframes grow {
        from { transform: scaleY(0); }
        to { transform scaleY(1); }
      }
    `}</style>
    </div>
  );
};
