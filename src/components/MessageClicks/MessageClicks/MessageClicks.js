import React from "react";
import PropTypes from "prop-types";
import { MessageClicksDescription } from "../MessageClicksDescription";
import "./MessageClicks.css";

export const MessageClicks = ({ total = 0, unique = 0, payed = 0 }) => {
  const uniqueHeight = `${unique / total * 200}px`;
  const payedHeight = `${payed / total * 200}px`;

  return (
    <div className="message-clicks">
      <div className="message-clicks__bar message-clicks__total">
        <MessageClicksDescription clicks={total} text="click totales" />

        <div
          className="message-clicks__bar message-clicks__unique"
          style={{ height: uniqueHeight }}
        >
          <MessageClicksDescription
            clicks={unique}
            text="click únicos"
            topOnMobile
          />
        </div>

        <div
          className="message-clicks__bar message-clicks__payed"
          style={{ height: payedHeight }}
        >
          <MessageClicksDescription
            clicks={payed}
            text="click pagados"
            alignLeft
          />
        </div>
      </div>
    </div>
  );
};

MessageClicks.propTypes = {
  total: PropTypes.number,
  unique: PropTypes.number,
  payed: PropTypes.number
};
