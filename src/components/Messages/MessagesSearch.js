import React from "react";
import * as Colors from "../../config/colors";
import { SearchIcon } from "../Icons";

export const MessagesSearch = () =>
  <div className="messages-search">
    <SearchIcon className="messages-search__icon" />
    <input
      type="text"
      className="messages-search__input"
      placeholder="Buscar..."
    />

    <style>{`
      .messages-search {
        position: relative;
      }

      .messages-search__input {
        background-color: white;
        font-size: 1.2em;
        width: 100%;
        padding: .5em 1em .5em 3em;
        margin: 0;
        border: none;
        border-top: 1px solid ${Colors.HEADER_BORDER};
        border-bottom: 1px solid ${Colors.HEADER_BORDER};
        box-shadow: 0px 1px 1px 0px ${Colors.HEADER_BORDER};
        outline: none;
        color: ${Colors.LIGHT_TEXT};
        z-index: 9;
      }

      .messages-search__icon {
        height: 1.5em;
        position: absolute;
        top: .6em;
        left: 1em;
        fill: ${Colors.LIGHT_TEXT};
      }

      @media screen and (min-width: 765px) {
        .messages-search__input {
          border-top: none;
          border-bottom: 1px solid ${Colors.HEADER_BORDER};
          box-shadow: 0px 1px 2px 0px ${Colors.MOBILE_HEADER_BG};
        }
      }
    `}</style>
  </div>;
