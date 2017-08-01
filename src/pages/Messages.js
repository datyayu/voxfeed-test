import React from "react";
import { Search, MessageList, MobileHeader } from "../components";
import * as Colors from "../config/colors";

const messages = [
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: true
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: true,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Telcel",
      name: "Telcel Lifestyle",
      logo: "/assets/logo_telcel.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  },
  {
    content:
      "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
    username: "Squalo",
    campaign: {
      brand: "Squalo",
      name: "Squalo Lifestyle",
      logo: "/assets/logo.png"
    },
    avatar: "/assets/user.png",
    date: "19 Oct 2014",
    isActive: false,
    read: false
  }
];

export const MessagesPage = ({ showMenu, onMenuClick, onItemClick }) =>
  <div className="messages-page">
    <MobileHeader
      title="messages"
      showMenu={showMenu}
      onButtonClick={onMenuClick}
    />
    <Search />
    <MessageList messages={messages} onItemClick={onItemClick} />

    <style jsx>{`
      .messages-page {
        background: white;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
      }

      @media screen and (min-width: 765px) {
        .messages-page {
          border-right: 1px solid ${Colors.HEADER_BORDER};
          width: 50%;
        }
      }
    `}</style>
  </div>;
