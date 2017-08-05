import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageTooltip.css";

export class MessageTooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = { showPopup: false };
  }

  handleMouseEnter = () => {
    this.setState({ showPopup: true });
  };

  handleMouseLeave = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { showPopup } = this.state;
    const { text } = this.props;

    return (
      <div className="message-tooltip">
        <span>(</span>
        <span
          className="message-tooltip__qmark"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          ?
        </span>
        <span>)</span>

        {showPopup &&
          <div className="message-tooltip__popup">
            {text}
          </div>}
      </div>
    );
  }
}
