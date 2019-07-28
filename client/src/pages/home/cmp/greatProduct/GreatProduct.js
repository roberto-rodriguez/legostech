import React, { Component } from "react";
import GreatProductCard from "./GreatProductCard";

export default class GreatProduct extends Component {
  render() {
    return (
      <div className=" white">
        <br />
        <h4 className="center-align">We make building great products simple</h4>
        <br />
        <GreatProductCard
          img={require("./launch.svg")}
          title="Launch faster, with peace of mind"
          text="Fixed-price plans & weekly milestones help you launch early and
        iterate often. All backed by our money-back guarantee."
          imgToLeft
        />
        <br />
        <GreatProductCard
          img={require("./design.svg")}
          title="Beautiful modular design"
          text="Our Canvas Design & library of configurable templates give you unparalleled speed & reliability, customized to your exact specifications."
        />
        <br />
        <GreatProductCard
          img={require("./staff.svg")}
          title="Staffing that scales with your needs"
          text="It takes few months to hire and train a developer. We allocate experienced resources to your project on demand as you scale and evolve."
          imgToLeft
        />
        <br />
        <GreatProductCard
          img={require("./tech.svg")}
          title="The best tech, managed for you"
          text="As the leaders in Bubble development, we build on the world's most advanced visual programming framework, so you get the best of the web without the overhead."
        />
      </div>
    );
  }
}
