// import React from "react";
// import { connect } from "react-redux";
// import getData from "../../redux/actions/getData";

// import PropTypes from "prop-types";
// import s from "./MovieCard.module.css";

// const MovieCard = ({ item, deleteFilm }) => {
//   return (
//     <li className={s.list_item} key={item._id}>
//       <h2 className={s.title}>{item.title}</h2>
//       <p className={s.actor_list}>Format: {item.format}</p>
//       <p className={s.actor_list}>Release year: {item.releaseYear}</p>
//       <p className={s.actor_list}>Actor list:</p>
//       <ul className={s.list}>
//         {item.stars.map(el => (
//           <li className={s.actor} key={el}>
//             {el}
//           </li>
//         ))}
//       </ul>
//       <button className={s.delete_btn} onClick={() => deleteFilm(item._id)}>
//         delete
//       </button>
//     </li>
//   );
// };

// const MDTP = dispatch => ({
//   deleteFilm: id => dispatch(getData.asyncDeleteDataAction(id))
// });

// MovieCard.propTypes = {
//   item: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     format: PropTypes.string.isRequired,
//     releaseYear: PropTypes.number.isRequired,
//     stars: PropTypes.arrayOf(PropTypes.string)
//   }),
//   deleteFilm: PropTypes.func.isRequired
// };

// export default connect(
//   null,
//   MDTP
// )(MovieCard);

import React from "react";
import { connect } from "react-redux";
import getData from "../../redux/actions/getData";
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

export default connect(
  null,
  MDTP
)(MovieCard);
