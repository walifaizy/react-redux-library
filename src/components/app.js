import React, {Component, PropTypes} from "react";
import Header from "./common/Header";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};
