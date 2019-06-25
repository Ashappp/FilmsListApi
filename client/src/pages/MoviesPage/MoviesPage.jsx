import React from "react";
import Filter from "../../components/Filter/Filter";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  return (
    <div className={s.container}>
      <Filter />
      <MovieList />
    </div>
  );
};

export default MoviesPage;
