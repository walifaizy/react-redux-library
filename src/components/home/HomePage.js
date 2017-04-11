import React, {Component} from "react";
import {Link} from "react-router";

export default class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration page</h1>
        <p>React, Redux and react-router course</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more..</Link>
      </div>
    );
  }
}
