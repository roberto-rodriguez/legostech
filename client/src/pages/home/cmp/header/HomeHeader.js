import React, { Component } from "react";
import "./homeHeader.scss";
import NavBar from "../../../common/NavBar";
import HeaderCard from "./HeaderCard";

export default class HomeHeader extends Component {
  render() {
    return (
      <header className="home-header">
        <NavBar transparent />

        <img
          className="puzzle-img"
          src={require("./puzzle.png")}
          alt=""
          width="30%"
        />

        <div className="container">
          <div className="section" style={{ marginTop: "3vh" }}>
            <h4 className="white-text left-align">
              We have all the pieces you need
            </h4>
          </div>
          {false && (
            <div className="section" style={{ width: "100%" }}>
              <h5 className="white-text left-align">
                We’re big enough to offer you stability <br />
                <br />
                and small enough to give you a personal touch.
              </h5>
            </div>
          )}

          <div className="section" style={{ width: "100%" }}>
            <div className="row">
              <div className="col s12 m12 l10 xl8">
                <HeaderCard
                  textColor="teal-text"
                  borderColor="#009688"
                  title="Talented Flexible Team"
                  text="We provide staffing on demand, so you can scale your capacity up or down each week as your needs evolve."
                />
                <HeaderCard
                  textColor="orange-text darken-4"
                  borderColor="orange"
                  title="Modern Technologies"
                  text="We work with the most cutting edge technologies in the market and best practices."
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l10 xl8">
                <HeaderCard
                  textColor="green-text darken-4"
                  borderColor="green"
                  title="Web, Mobile and Back End"
                  text="Our team has proven experience developing client and server side applications, and mobile applications for Android and iOS"
                />
                <HeaderCard
                  textColor="red-text accent-4"
                  borderColor="red"
                  title="Competitive prices"
                  text="We offer free scoping, fixed pricing, and a complete money-back guarantee on each deliverable."
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
