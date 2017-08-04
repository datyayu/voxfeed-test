import React, { Component } from "react";
import { SearchIcon } from "../Icons";
import "./Search.css";

export class Search extends Component {
  handleChange = event => {
    const value = event.target.value;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <div className="search">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Buscar..."
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
