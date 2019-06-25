import React, { Component } from "react";
import {
  arrFilterSortAZ,
  arrFilterSortZA,
  arrFilterTitle,
  arrFilterStar
} from "../../redux/actions/filteredDataActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

class Filter extends Component {
  state = {
    filmTitle: "",
    starName: ""
  };

  handelChangeTitle = e => {
    const { filterTitle, data } = this.props;
    this.setState(
      {
        filmTitle: e.target.value
      },
      () => filterTitle(data, this.state.filmTitle)
    );
  };

  handelChangeActor = e => {
    const { filterStar, data } = this.props;
    this.setState(
      {
        starName: e.target.value
      },
      () => filterStar(data, this.state.starName)
    );
  };

  render() {
    const { data, filterSortAZ, filterSortZA } = this.props;
    const { filmTitle, starName } = this.state;
    return (
      <ul className={s.list}>
        <li className={s.list_item}>
          <input
            name="filmTitle"
            type="text"
            placeholder="Search film by name"
            className={s.input}
            onChange={this.handelChangeTitle}
            value={filmTitle}
          />
        </li>
        <li className={s.list_item}>
          <input
            name="starName"
            type="text"
            placeholder="Search film by actor name"
            className={s.input}
            onChange={this.handelChangeActor}
            value={starName}
          />
        </li>
        <li className={s.list_item}>
          <button className={s.btn} onClick={() => filterSortAZ(data)}>
            Sort by film name A-Z
          </button>
        </li>
        <li className={s.list_item}>
          <button className={s.btn} onClick={() => filterSortZA(data)}>
            Sort by film name Z-A
          </button>
        </li>
      </ul>
    );
  }
}

const MSTP = store => ({
  data: store.data
});

const MDTP = dispatch => ({
  filterTitle: (data, param) => dispatch(arrFilterTitle(data, param)),
  filterStar: (data, param) => dispatch(arrFilterStar(data, param)),
  filterSortAZ: data => dispatch(arrFilterSortAZ(data)),
  filterSortZA: data => dispatch(arrFilterSortZA(data))
});

Filter.propTypes = {
  filterTitle: PropTypes.func.isRequired,
  filterStar: PropTypes.func.isRequired,
  filterSortAZ: PropTypes.func.isRequired,
  filterSortZA: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(
  MSTP,
  MDTP
)(Filter);
