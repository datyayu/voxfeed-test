import React from "react";
import { SearchIcon } from "../Icons";
import * as Colors from "../../config/colors";

export const Search = () =>
  <div className="search">
    <SearchIcon className="search__icon" />
    <input type="text" className="search__input" placeholder="Buscar..." />

    <style jsx>{`
      .search {
        position: relative;
      }

      .search__input {
        background-color: white;
        border: none;
        border-bottom: 1px solid ${Colors.HEADER_BORDER};
        border-top: 1px solid ${Colors.HEADER_BORDER};
        box-shadow: 0px 1px 1px 0px ${Colors.HEADER_BORDER};
        box-sizing: border-box;
        color: ${Colors.LIGHT_TEXT};
        font-size: 1.2em;
        margin: 0;
        outline: none;
        padding: .5em 1em .5em 3em;
        width: 100%;
        z-index: 9;
      }

      .search__icon {
        fill: ${Colors.LIGHT_TEXT};
        height: 1.5em;
        left: 1em;
        position: absolute;
        top: .6em;
      }

      @media screen and (min-width: 765px) {
        .search__input {
          border-bottom: 1px solid ${Colors.HEADER_BORDER};
          border-top: none;
          box-shadow: 0px 1px 2px 0px ${Colors.MOBILE_HEADER_BG};
        }
      }
    `}</style>
  </div>;
