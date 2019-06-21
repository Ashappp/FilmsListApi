import React, { Component } from "react";
import { connect } from "react-redux";
import asyncDataAction from "./redux/actions/getData";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { input } = this.props;
    this.props.getdata(input);
  }
  render() {
    return <div />;
  }
}

const MSTP = store => ({
  input: store.input
});

const MDTP = dispatch => ({
  getdata: input => dispatch(asyncDataAction(input))
});

export default connect(
  MSTP,
  MDTP
)(App);
