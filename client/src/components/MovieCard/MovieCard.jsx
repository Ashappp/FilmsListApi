import React from 'react';
import { connect } from 'react-redux';
import getData from '../../redux/actions/getData';
import s from './MovieCard.module.css';

const MovieCard = ({ filteredData, item, deleteFilm }) => {
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
      <button
        className={s.delete_btn}
        disabled={filteredData.length === 1 ? true : false}
        onClick={() => deleteFilm(item._id)}
      >
        delete
      </button>
    </li>
  );
};

const MSTP = store => ({
  filteredData: store.filteredData,
});

const MDTP = dispatch => ({
  deleteFilm: id => dispatch(getData.asyncDeleteDataAction(id)),
});

export default connect(
  MSTP,
  MDTP,
)(MovieCard);
