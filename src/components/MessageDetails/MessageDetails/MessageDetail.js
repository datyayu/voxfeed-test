import React from "react";
import { MessagePropType } from "../../../types";
import { MessageDetailCampaign } from "../MessageDetailsCampaign";
import { MessageDetailTitle } from "../MessageDetailTitle";
import { MessageClicks } from "../../MessageClicks";
import { MessageImpact } from "../../MessageImpact";
import "./MessageDetail.css";

export const MessageDetail = ({ message }) => {
  if (!message) return null;

  const { user, campaign, results } = message;

  return (
    <div className="message-detail">
      <MessageDetailCampaign
        campaignBrand={campaign.brand}
        campaignLogo={campaign.logo}
        campaignName={campaign.groupAd}
      />

      <MessageDetailTitle title="Cantidad y tipo de clicks" />
      <MessageClicks {...results.clicks} />

      <MessageDetailTitle title="Impacto viral" />
      <MessageImpact
        replies={results.replies}
        retweets={results.retweets}
        user={user}
      />
    </div>
  );
};

MessageDetail.propTypes = {
  message: MessagePropType
};
