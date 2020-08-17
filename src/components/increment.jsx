import React, { Component, Fragment } from "react";

export default class Increment extends Component {
  state = {
    value: 0
  };
  incrementValue = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrementValue = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <button
          onClick={() => this.incrementValue()}
          className="btn btn-primary btn-lg m-5 p-5"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrementValue()}
          className="btn btn-danger btn-lg p-5 m-5"
        >
          Decrement
        </button>
      </Fragment>
    );
  }
}
