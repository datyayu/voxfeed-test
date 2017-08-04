import React from "react";
import "./MessageDetailCampaign.css";

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
  </div>;
