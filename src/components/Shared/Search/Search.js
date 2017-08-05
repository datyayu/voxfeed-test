import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "../../Icons";
import "./Search.css";

const ENTER_KEY = 13;

export class Search extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
  };

  handleChange = event => {
    const value = event.target.value;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode !== ENTER_KEY) return;

    event.target.blur();
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
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}
