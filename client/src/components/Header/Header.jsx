import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className={style.list}>
      <li>
        <NavLink className={style.item} to="/">
          Films
        </NavLink>
      </li>
      <li>
        <NavLink className={style.item} to="/upload">
          Upload file
        </NavLink>
      </li>
      <li>
        <NavLink className={style.item} to="/add">
          Add films
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
