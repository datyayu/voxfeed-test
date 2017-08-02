import React from "react";
import { CirclesAnimation } from "./CirclesAnimation";
import { MessageImpactCentralPin } from "./MessageImpactCentralPin";
import { MessageImpactSmallPin } from "./MessageImpactSmallPin";
import { MessageImpactBigPin } from "./MessageImpactBigPin";
import * as Colors from "../../config/colors";

export const MessageImpact = ({ user, retweets, replies }) =>
  <div className="message-impact">
    <img
      className="message-impact__image"
      src={user.avatarUrl}
      alt={user.name}
      width="50px"
      height="50px"
    />

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
    <CirclesAnimation />

    <style jsx global>{`
      .message-impact {
        padding-top: 2em;
        position: relative;
      }

      .message-impact__image {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
        border: 2px solid ${Colors.MAIN_COLOR};
        border-radius: 50%;
        box-shadow: 0px 29px 36px -20px #333;
        left: 0;
        margin-left: 50%;
        position: absolute;
        top: 3em;
        will-change: transform, opacity;
        z-index: 1;
      }

      .central-pin,
      .small-pin,
      .big-pin {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
        opacity: 0;
        position: absolute;
      }

      .central-pin {
        animation-delay: .5s;
        position: absolute;
        right: 0;
        top: -1em;
        transform: translateX(-50%);
        width: 50%;
      }

      .small-pin {
        animation-delay: 1s;
        right: 0;
        top: 1em;
        transform: translateX(-50%) translateX(2.5em);
        width: 100%;
      }

      .big-pin {
        animation-delay: 1.5s;
        right: 0;
        top: -1em;
        transform: translateX(-50%) translateX(2.5em);
        width: 100%;
      }

      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(-1em);
        }

        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
    `}</style>
  </div>;
