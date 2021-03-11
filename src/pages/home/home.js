import axios from "axios";
import React, { Component } from "react";
import "./home.css";
import Card from "../../components/cards/card";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.spacexdata.com/v3/launches?limit=100").then((res) =>
      this.setState({
        data: res.data,
      })
    );
  }
  render() {
    return (
      <div className="home">
        {this.state.data.map((item) => (
          <Card data={item} />
        ))}
      </div>
    );
  }
}
