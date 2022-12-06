import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import aboutUs from "../../img/aboutUs.png";
export default function Nav(props) {
  return (
    <div className={style.divNav}>
      <Link to={"/home"}>
        <img src={logo} alt="logo" srcset="" />
      </Link>
      <Link to={"/about"}>
        <img
          className={style.iconAbout}
          src={aboutUs}
          alt="Icon AboutUS"
          srcset=""
        />
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/">
        <button className={style.iconAbout}>LogOut</button>
      </Link>
    </div>
  );
}
