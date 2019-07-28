
import React, { Component } from "react";
 
export default class HowHelpCard extends Component {
  render() {
    return ( 
            <div className="col s12 m6 l4 body-card">
              <div class="card white">
                <div class="card-content">
                  <span class="card-title">
                    Looking for an affordable, efficient team offshore?
                  </span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class="card-action">
                  <a href="#">
                    <b className="grey-text">Contact Us</b>
                  </a>
                </div>
              </div>
            </div> 
    );
  }
}
