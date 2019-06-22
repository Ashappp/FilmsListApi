import React from "react";
import style from "./FilmCard.module.css";
import Button from "../Button/Button";

const FilmCard = ({ item }) => {
  return (
    <li className={style.dashboard__filmCard}>
      <p>{item.title}</p>
      <p>{item.format}</p>
      <p>{item.stars}</p>
      <Button>delete</Button>
      <Button>show info</Button>
    </li>
  );
};

export default FilmCard;
