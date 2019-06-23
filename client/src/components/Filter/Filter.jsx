import React from "react";
import style from "./Filter.module.css";
import {
  arrFilterSort,
  arrFilterTitle,
  arrFilterStar
} from "../../redux/actions/arrDraw";
import { connect } from "react-redux";
import addFilterFild from "../../redux/actions/filterInputFilds";
// import { func } from "prop-types";
import InputUi from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class Filter extends React.Component {
  render() {
    const {
      data,
      title,
      star,
      FilterSort,
      FilterTitle,
      FilterStar,
      addFilterFild
    } = this.props;
    return (
      <ul className={style.filter__conteiner}>
        <li className={style}>
          <InputUi
            name="title"
            type="text"
            placeholder="Title"
            className={style.input}
            onChange={addFilterFild}
          />
          <button name="title" onClick={() => FilterTitle(data, title)}>
            Название фильма
          </button>
        </li>
        <li className={style}>
          <InputUi
            name="star"
            type="text"
            placeholder="Star"
            className={style.input}
            onChange={addFilterFild}
          />
          <button onClick={() => FilterStar(data, star)}>Актер</button>
        </li>
        <li className={style.input}>
          <Button onClick={()=>FilterSort(data)}>По названию</Button>
        </li>
      </ul>
    );
  }
}

const MSTP = store => ({
  data: store.data,
  title: store.filterFilds.title,
  star: store.filterFilds.star
});

const MDTP = dispatch => ({
  FilterTitle: (data, param) => dispatch(arrFilterTitle(data, param)),
  FilterStar: (data, param) => dispatch(arrFilterStar(data, param)),
  FilterSort: data => dispatch(arrFilterSort(data)),
  addFilterFild: e => dispatch(addFilterFild(e))
});

Filter.propTypes = {};

export default connect(
  MSTP,
  MDTP
)(Filter);
