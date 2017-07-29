import React, { Component } from "react";
import * as Colors from "../../config/colors";

export class NavbarLink extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  mapPropsToChildren = child => {
    const { isActive } = this.props;
    const { isHovered } = this.state;

    if (!child.type || child.type === "span") {
      return child;
    }

    return React.cloneElement(child, {
      isActive: isActive || isHovered
    });
  };

  render = () => {
    const { isActive, children } = this.props;
    const linkClasses = `navbar-link ${isActive && "is-active"}`;
    const childrenComponents = React.Children.map(
      children,
      this.mapPropsToChildren
    );

    return (
      <div
        className={linkClasses}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {childrenComponents}

        <style jsx>{`
          .navbar-link {
            box-sizing: border-box;
            cursor: pointer;
            height: 90px;
            margin: .25em 0;
            padding: 1em 10%;
            width: 100%;
          }

          .navbar-link:hover {
            background: ${Colors.NAVBAR_HOVER_BG};
            margin: .25em 10%;
            padding: 1em 0;
            width: 80%;
          }

          .navbar-link.is-active,
          .navbar-link.is-active:hover {
            background: ${Colors.NAVBAR_ACTIVE_BG};
            color: white;
            margin: .25em 0;
            padding: 1em 10%;
            width: 100%;
          }
        `}</style>
      </div>
    );
  };
}
