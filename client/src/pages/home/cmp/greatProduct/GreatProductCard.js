import React, { Component } from "react";

export default class GreatProductCard extends Component {
  render() {
    var { title, img, text, imgToLeft } = this.props;
    //"./launch.svg"
    // Launch faster, with peace of mind
    // Fixed-price plans & weekly milestones help you launch early and iterate often. All backed by our money-back guarantee.

    const imgCol = (
      <div className="col m6 hide-on-small-only center-align">
        <img className=" great-product-img" src={img} alt="" />
      </div>
    );

    const textCol = (
      <div className="col m6 s12">
        <h5 style={{ color: "rgb(5, 36, 66)" }}>{title}</h5>
        <p class="flow-text" style={{ color: "rgb(104, 106, 117)" }}>
          {text}
        </p>
      </div>
    );

    const content = [];

    if (imgToLeft) {
      content.push(imgCol);
      content.push(textCol);
    } else {
      content.push(textCol);
      content.push(imgCol);
    }

    return <div className="container section row">{content}</div>;
  }
}
