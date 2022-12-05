import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className={style.divNav}>
      {/* <h3>Rick & Morty APP</h3> */}
      <Link to={"/home"}>
        <img src={logo} alt="logo" srcset="" />
      </Link>
      <Link to={"/about"}>
        <h4>About</h4>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
