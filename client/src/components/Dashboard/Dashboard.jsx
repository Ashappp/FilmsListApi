import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import asyncDataAction from "../../redux/actions/getData";
// import style from "./Dashboard.module.css";
import FilmCard from "../FilmCard/FilmCard";
// import Loader from "react-loader-spinner";

class Dashboard extends Component {
  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.length
          ? data.map(el => <FilmCard item={el} key={el._id} />)
          : null}
      </ul>
    );
  }
}

const MSTP = store => ({
  input: store.input,
  data: store.data
});

Dashboard.propTypes = {};

export default connect(MSTP)(Dashboard);
