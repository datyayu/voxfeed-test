import React from "react";
import { MessageDetailCampaign } from "./MessageDetailCampaign";
import { MessageDetailTitle } from "./MessageDetailTitle";
import { MessageClicks } from "./MessageClicks";
import { MessageImpact } from "./MessageImpact";

export const MessageDetail = ({ user, campaign, clicks, retweets, answers }) =>
  <div className="message-detail">
    <MessageDetailCampaign
      campaignLogo={campaign.logo}
      campaignName={campaign.name}
      campaignBrand={campaign.brand}
    />

    <MessageDetailTitle title="Cantidad y tipo de clicks" />
    <MessageClicks {...clicks} />

    <MessageDetailTitle title="Impacto viral" />
    <MessageImpact user={user} retweets={retweets} answers={answers} />

    <style jsx>{`
      .message-detail {
        background: white;
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
