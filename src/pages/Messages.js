import React from "react";
import { Search, MessageList } from "../components";
import * as Colors from "../config/colors";

const messages = [
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaignName: "Squalo LifeStyle",
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaignName: "Squalo LifeStyle",
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: true
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaignName: "Squalo LifeStyle",
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: true,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaignName: "Squalo LifeStyle",
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  }
];

export const MessagesPage = () =>
  <div className="messages-page">
    <Search />
    <MessageList messages={messages} />

    <style jsx>{`
      .messages-page {
        width: 50%;
        border-right: 1px solid ${Colors.HEADER_BORDER};
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>;
