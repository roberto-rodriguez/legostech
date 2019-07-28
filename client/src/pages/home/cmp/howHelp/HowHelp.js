import React, { Component } from "react";
import HowHelpCard from "./HowHelpCard";

export default class HowHelp extends Component {
  render() {
    //Startup looking to build an MVP ?
    return (
      <div>
        <div className="section">
          <h4 className="center-align">Let us show you how we can help you</h4>
        </div>
        <div className="section row">
          <HowHelpCard />
          <HowHelpCard />
          <HowHelpCard />
        </div>
      </div>
    );
  }
}
