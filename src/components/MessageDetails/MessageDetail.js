import React from "react";
import { MessageDetailCampaign } from "./MessageDetailCampaign";
import { MessageDetailClicks } from "./MessageDetailClicks";
import { MessageDetailTitle } from "./MessageDetailTitle";

export const MessageDetail = ({ campaign, clicks }) =>
  <div className="message-detail">
    <MessageDetailCampaign
      campaignLogo={campaign.logo}
      campaignName={campaign.name}
      campaignBrand={campaign.brand}
    />

    <MessageDetailTitle title="Cantidad y tipo de clicks" />
    <MessageDetailClicks {...clicks} />

    <MessageDetailTitle title="Impacto viral" />
    {/* Viral impact */}

    <style jsx>{`
      .message-detail {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
      }

      @media screen and (min-width: 765px) {
        .message-detail-page {
          width: 50%;
        }
      }
    `}</style>
  </div>;
