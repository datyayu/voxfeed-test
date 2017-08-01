import React from "react";
import { MessageDetailClickDescription } from "./MessageDetailClickDescription";
import * as Colors from "../../config/colors";

export const MessageDetailClicks = ({ total = 0, unique = 0, payed = 0 }) => {
  const uniqueHeight = `${unique / total * 200}px`;
  const payedHeight = `${payed / total * 200}px`;

  return (
    <div className="message-detail-clicks">
      <div className="message-detail-clicks__bar message-detail__total-clicks">
        <MessageDetailClickDescription clicks={total} text="click totales" />

        <div
          className="message-detail-clicks__bar message-detail__unique-clicks"
          style={{ height: uniqueHeight }}
        >
          <MessageDetailClickDescription
            clicks={unique}
            text="click únicos"
            topOnMobile
          />
        </div>

        <div
          className="message-detail-clicks__bar message-detail__payed-clicks"
          style={{ height: payedHeight }}
        >
          <MessageDetailClickDescription
            clicks={payed}
            text="click pagados"
            alignLeft
          />
        </div>
      </div>

      <style jsx>{`
      .message-detail-clicks {
        width: 100%;
      }

      .message-detail-clicks__bar {
        bottom: 0;
        left: 0;
        position: absolute;
        transform-origin: bottom;
        width: 50px;
        will-change: transform;
      }

      .message-detail__total-clicks {
        animation: grow 1s ease-in-out;
        background: ${Colors.TOTAL_CLICKS_BAR};
        height: 200px;
        margin: 0 auto;
        position: relative;
      }

      .message-detail__unique-clicks {
        background: ${Colors.UNIQUE_CLICKS_BAR};
        animation: grow 1.15s ease-in-out;
      }

      .message-detail__payed-clicks {
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
