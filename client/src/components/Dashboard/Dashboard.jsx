import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import asyncDataAction from "../../redux/actions/getData";
import style from "./Dashboard.module.css";
import FilmCard from "../FilmCard/FilmCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { input } = this.props;
    this.props.getdata(input);
  }
  render() {
    return (
      <div className={style.dashboard}>
        <FilmCard />
      </div>
    );
  }
}

const MSTP = store => ({
  input: store.input
});

const MDTP = dispatch => ({
  getdata: input => dispatch(asyncDataAction(input))
});

Dashboard.propTypes = {};

export default connect(
  MSTP,
  MDTP
)(Dashboard);
