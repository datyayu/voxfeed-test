import React from "react";

export const MobileHeaderBackButton = ({ className = "", onClick }) =>
  <div className={`back-button ${className}`} onClick={onClick}>
    <span className="back-button__arrow">&lt;</span>
    <span className="back-button__text">BACK</span>

    <style jsx>{`
      .back-button {
        align-items: center;
        cursor: pointer;
        display: flex;
      }
      .back-button__arrow {
        font-size: 3em;
        font-weight: 200;
        margin-top: -.30em;
      }

      .back-button__text {
        margin-top: -.65em;
      }
    `}</style>
  </div>;
