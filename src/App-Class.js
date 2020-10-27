import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <h2>{this.state.counter}</h2>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
