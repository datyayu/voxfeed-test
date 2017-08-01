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
        box-sizing: border-box;
        max-width: 100%;
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
        box-sizing: border-box;
        height: 200px;
        margin: 0 auto;
        position: relative;
      }

      .message-clicks__unique {
        animation: grow 1.15s ease-in-out;
        background: ${Colors.UNIQUE_CLICKS_BAR};
      }

      .message-clicks__payed {
        animation: grow 1.25s ease-in-out;
        background: ${Colors.PAYED_CLICKS_BAR};
      }

      @keyframes grow {
        from { transform: scaleY(0); }
        to { transform scaleY(1); }
      }
    `}</style>
    </div>
  );
};
