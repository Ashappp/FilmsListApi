import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import s from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

class Dashboard extends Component {
  render() {
    const { filteredData } = this.props;
    return (
      <ul className={s.movie_list}>
        {filteredData.length
          ? filteredData.map(el => <MovieCard item={el} key={el._id} />)
          : null}
      </ul>
    );
  }
}

const MSTP = store => ({
  filteredData: store.filteredData
});

Dashboard.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(MSTP)(Dashboard);
