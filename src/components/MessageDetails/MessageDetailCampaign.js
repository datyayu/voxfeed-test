import React from "react";
import * as Colors from "../../config/colors";

export const MessageDetailCampaign = ({
  campaignBrand,
  campaignName,
  campaignLogo
}) =>
  <div className="message-detail-campaign">
    <img
      className="message-detail-campaign__logo"
      src={campaignLogo}
      alt={`${campaignName} logo`}
    />

    <div className="message-detail-campaign__text">
      <h2 className="message-detail-campaign__brand">
        {campaignBrand}
      </h2>

      <h4 className="message-detail-campaign__name">
        Campaña {campaignName}
      </h4>
    </div>

    <style jsx>{`
      .message-detail-campaign {
        box-sizing: border-box;
        display: flex;
        padding: 2em 2em 1em 2em;
        font-size: .9em;
        min-height: 4em;
      }

      .message-detail-campaign__logo {
        height: 50px;
        margin-right: 1em;
        width: 50px;
      }

      .message-detail-campaign__brand {
        font-weight: normal;
        margin: 0;
      }

      .message-detail-campaign__name {
        color: ${Colors.LIGHT_TEXT};
        font-style: italic;
        font-weight: normal;
        margin: .3em 0;
      }

      @media screen and (min-width: 765px) {
        .message-detail-campaign {
          margin: 3em 0 1em 0;
          padding: 0 5em;
        }
      }
    `}</style>
  </div>;
