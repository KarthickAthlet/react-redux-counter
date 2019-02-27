import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <span>{this.props.counter}</span>

            <button type="button" onClick={this.props.incrementCounter}>
              Increment Button
            </button>
            <button type="button" onClick={this.props.decrementCounter}>
              Decrement Button
            </button>
            <button type="button" onClick={this.props.resetCounter}>
              Reset
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { counter: state };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrementCounter: () => {
    dispatch({ type: "DECREMENT" });
  },
  resetCounter: () => {
    dispatch({ type: "RESET" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
