import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    var { transparent } = this.props;

    return (
      <nav style={{ backgroundColor: transparent ? "transparent" : "#0e0843" }}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Legos Tech
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: "10%" }}
          >
            <li>
              <a className="flow-text" href="badges.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
