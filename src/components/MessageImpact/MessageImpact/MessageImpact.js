import React from "react";
import { CirclesAnimation } from "../CirclesAnimation";
import { MessageImpactCentralPin } from "../MessageImpactCentralPin";
import { MessageImpactSmallPin } from "../MessageImpactSmallPin";
import { MessageImpactBigPin } from "../MessageImpactBigPin";
import "./MessageImpact.css";

export const MessageImpact = ({ user, retweets, replies }) =>
  <div className="message-impact">
    <img
      className="message-impact__image"
      src={user.avatarUrl}
      alt={user.name}
      width="50px"
      height="50px"
    />

    <CirclesAnimation />
    <MessageImpactCentralPin
      number={user.followers}
      text="Followers"
      className="central-pin"
    />
    <MessageImpactSmallPin
      number={replies}
      text="Respuestas"
      className="small-pin"
    />
    <MessageImpactBigPin
      number={retweets}
      text="Usuarios via Retweets"
      className="big-pin"
    />
  </div>;
