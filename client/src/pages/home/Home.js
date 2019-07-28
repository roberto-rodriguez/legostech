import React, { Component } from "react";
import "./Home.scss";
import { HomeHeader, HowHelp, GreatProduct } from "./cmp";

export default class Home extends Component {
  render() {
    return (
      <div className="grey lighten-5">
        <HomeHeader />

        <div className="container">
          <br />
          <HowHelp />
        </div>
        <br />
        <GreatProduct />
      </div>
    );
  }
}
