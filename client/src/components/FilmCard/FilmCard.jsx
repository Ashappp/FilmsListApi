import React from "react";
import style from "./FilmCard.module.css";
import Button from "../Button/Button";
import DeleteIcon from "../ButtonDelete/ButtonDelete";

const FilmCard = ({ item }) => {
  return (
    <li className={style.dashboard__filmCard}>
      <p>{item.title}</p>
      <p>{item.format}</p>
      <ul className={style.list}>
        {item.stars.map(el => (
          <li key={el._id}>{el}</li>
        ))}
      </ul>
      <Button>show info</Button>
      <DeleteIcon />
    </li>
  );
};

export default FilmCard;
