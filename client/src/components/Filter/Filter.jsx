import React from "react";
import style from "./Filter.module.css";
import {
  objFilterSort,
  objFilterTitle,
  objFilterStar
} from "../../redux/actions/objDraw";
import { connect } from "react-redux";
import addFilterFild from "../../redux/actions/filterInputFilds";

const Filter = props => {
  const {
    data,
    title,
    star,
    objFilterSort,
    objFilterTitle,
    objFilterStar
  } = props;
  return (
    <ul>
      <li className={style}>
        <input
          type="text"
          placeholder="Title"
          className={style.input}
          onChange={e => addFilterFild(e)}
        />
        <button
          className={style.button}
          onClick={(data, title) => objFilterTitle(data, title)}
        >
          {" "}
          Название фильма
        </button>
      </li>
      <li className={style}>
        <input
          type="text"
          placeholder="Star"
          className={style.input}
          onChange={e => addFilterFild(e)}
        />
        <button
          className={style.button}
          onClick={(data, star) => objFilterStar(data, star)}
        >
          {" "}
          Актер{" "}
        </button>
      </li>
      <li className={style.input}>
        <button onClick={objFilterSort} className={style.button}>
          {" "}
          По названию{" "}
        </button>
      </li>
    </ul>
  );
};

const MSTP = store => ({
  data: store.drawObj,
  title: store.filterFilds.title,
  star: store.filterFilds.star
});

const MDTP = dispatch => ({
  objFilterTitle: (data, param) => dispatch(objFilterTitle(data, param)),
  objFilterStar: (data, param) => dispatch(objFilterStar(data, param)),
  objFilterSort: () => dispatch(objFilterSort()),
  addFilterFild: e => dispatch(addFilterFild(e))
});

Filter.propTypes = {};

export default connect(
  MSTP,
  MDTP
)(Filter);
