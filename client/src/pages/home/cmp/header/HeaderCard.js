import React, { Component } from "react";
import "./homeHeader.scss";

export default class HeaderCard extends Component {
  render() {
    var { title, text, textColor, borderColor } = this.props;

    return (
      <div className="col s12 m6 l6 header-card">
        <div
          className="card-panel"
          style={{
            borderBottom: `5px solid #90caf9`,
            padding: "6px 20px"
          }}
        >
          <h5 className={"card-title "} style={{ color: "#0e0843" }}>
            {title}
          </h5>
          <h6 class={"grey-text"} style={{ color: "rgb(104, 106, 117)" }}>
            {text}
          </h6>
          <a href="#" style={{ float: "right", color: "#0e0843" }}>
            Learn More...
          </a>
          <br />
        </div>
      </div>
    );
  }
}
