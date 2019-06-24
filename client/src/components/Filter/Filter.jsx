import React, { Component } from "react";
import {
  arrFilterSortAZ,
  arrFilterSortZA,
  arrFilterTitle,
  arrFilterStar
} from "../../redux/actions/filteredDataActions";
import { connect } from "react-redux";
import s from "./Filter.module.css";

class Filter extends Component {
  state = {
    filmTitle: "",
    starName: ""
  };

  handelChangeTitle = e => {
    const { FilterTitle, data } = this.props;
    this.setState(
      {
        filmTitle: e.target.value
      },
      () => FilterTitle(data, this.state.filmTitle)
    );
  };

  handelChangeActor = e => {
    const { FilterStar, data } = this.props;
    this.setState(
      {
        starName: e.target.value
      },
      () => FilterStar(data, this.state.starName)
    );
  };

  render() {
    const { data, FilterSortAZ, FilterSortZA } = this.props;
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
          <button className={s.btn} onClick={() => FilterSortAZ(data)}>
            Sort by film name A-Z
          </button>
        </li>
        <li className={s.list_item}>
          <button className={s.btn} onClick={() => FilterSortZA(data)}>
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
  FilterTitle: (data, param) => dispatch(arrFilterTitle(data, param)),
  FilterStar: (data, param) => dispatch(arrFilterStar(data, param)),
  FilterSortAZ: data => dispatch(arrFilterSortAZ(data)),
  FilterSortZA: data => dispatch(arrFilterSortZA(data))
});

export default connect(
  MSTP,
  MDTP
)(Filter);
