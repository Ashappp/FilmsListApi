import React from "react";
import style from "./MovieCard.module.css";
import Button from "../Button/Button";
import DeleteIcon from "../ButtonDelete/ButtonDelete";

const MovieCard = ({ item }) => {
  return (
    <li className={style.dashboard__movieCard}>
      <p>{item.title}</p>
      <p>{item.format}</p>
      <ul className={style.list}>
        {item.stars.map(el => (
          <li key={el._id}>{el}</li>
        ))}
      </ul>
      <Button>show info</Button>
      <DeleteIcon data-id ={item._id} />
    </li>
  );
};

export default MovieCard;
