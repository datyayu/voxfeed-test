import React from "react";
import { CirclesAnimation } from "./CirclesAnimation";
import { MessageImpactCentralPin } from "./MessageImpactCentralPin";
import { MessageImpactSmallPin } from "./MessageImpactSmallPin";
import { MessageImpactBigPin } from "./MessageImpactBigPin";
import * as Colors from "../../config/colors";

export const MessageImpact = ({ user, retweets, answers }) =>
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
      number={answers}
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
        position: absolute;
        top: 3em;
        border: 2px solid ${Colors.MAIN_COLOR};
        box-shadow: 0px 29px 36px -20px #333;
        border-radius: 50%;
        left: 0;
        margin-left: 50%;
        z-index: 1;
        will-change: transform, opacity;
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }

      .central-pin,
      .small-pin,
      .big-pin {
        position: absolute;
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
        opacity: 0;
      }

      .central-pin {
        position: absolute;
        top: -1em;
        right: 0;
        width: 50%;
        transform: translateX(-50%);
        animation-delay: .5s;
      }

      .small-pin {
        top: 1em;
        right: 0;
        width: 100%;
        transform: translateX(-50%) translateX(2.5em);
        animation-delay: 1s;
      }

      .big-pin {
        top: -1em;
        right: 0;
        width: 100%;
        transform: translateX(-50%) translateX(2.5em);
        animation-delay: 1.5s;
      }

      @keyframes fade-in {
        from {
          transform: translateX(-50%) translateY(-1em);
          opacity: 0;
        }

        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    `}</style>
  </div>;
