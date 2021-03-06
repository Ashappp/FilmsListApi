import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink className={style.item} to="/movies">
              Films
            </NavLink>
          </li>
          <li>
            <NavLink className={style.item} to="/uploadfile">
              Upload file
            </NavLink>
          </li>
          <li>
            <NavLink className={style.item} to="/addmovie">
              Add films
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
