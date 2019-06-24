import React from "react";
import { connect } from "react-redux";
import getData from "../../redux/actions/getData";

import PropTypes from "prop-types";
import s from "./MovieCard.module.css";

const MovieCard = ({ item, deleteFilm }) => {
  return (
    <li className={s.list_item} key={item._id}>
      <h2>{item.title}</h2>
      <h3>{item.format}</h3>
      <h4>Release year: {item.releaseYear}</h4>
      <p className={s.actor_list}>Actor list:</p>
      <ul className={s.list}>
        {item.stars.map(el => (
          <li className={s.actor} key={el}>
            {el}
          </li>
        ))}
      </ul>
      <button className={s.delete_btn} onClick={() => deleteFilm(item._id)}>
        delete
      </button>
    </li>
  );
};

const MDTP = dispatch => ({
  deleteFilm: id => dispatch(getData.asyncDeleteDataAction(id))
});

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  deleteFilm: PropTypes.func.isRequired
};

export default connect(
  null,
  MDTP
)(MovieCard);
