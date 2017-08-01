import React from "react";
import { MobileHeader, MessageDetail } from "../components";
import * as Colors from "../config/colors";

const campaign = {
  brand: "Squalo",
  name: "Squalo Lifestyle",
  logo: "/assets/logo.png"
};
const clicks = {
  total: 267,
  unique: 207,
  payed: 198
};

export const MessageDetailPage = ({ show, onClose }) => {
  const pageClasses = `message-detail-page ${show && "is-active"}`;

  return (
    <div className={pageClasses}>
      <MobileHeader title={campaign.name} hasBack onButtonClick={onClose} />
      <MessageDetail campaign={campaign} clicks={clicks} />

      <style jsx>{`
        .message-detail-page {
          background: white;
          box-shadow: 0 0 16px 4px ${Colors.DARK_SHADOW};
          display: flex;
          flex-direction: column;
          height: 100vh;
          left: 0;
          position: fixed;
          top: 0;
          transition: 300ms transform ease-in-out;
          transform: translateX(120%);
          width: 100%;
          will-change: transform;
        }

        .message-detail-page.is-active {
          transform: translateX(0);
        }

        @media screen and (min-width: 765px) {
          .message-detail-page {
            box-shadow: none;
            position: static;
            transform: translateX(0);
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
};
