import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    console.log(this.props.data.mission_id);
    return (
      <div className="card">
        <img src={this.props.data.links.mission_patch_small} alt="" />
        <h6 className="name">{this.props.data.mission_name}</h6>
        <h6>Mission id: </h6>
        <ul>
          {this.props.data.mission_id.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <h6>
          launch Year : <span>{this.props.data.launch_year}</span>
        </h6>
        <h6>
          Succesful Launch <span>{`${this.props.data.launch_success}`}</span>
        </h6>
        <h6>
          Succesful landing <span></span>
        </h6>
      </div>
    );
  }
}
