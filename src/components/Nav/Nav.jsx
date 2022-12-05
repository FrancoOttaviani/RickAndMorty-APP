import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "../../img/logo.png";
export default function Nav(props) {
  return (
    <div className={style.divNav}>
      {/* <h3>Rick & Morty APP</h3> */}
      <img src={logo} alt="logo" srcset="" />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
