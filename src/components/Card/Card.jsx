import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const handleClose = () => {
    props.onClose(props.id);
  };

  return (
    <div className={style.card}>
      <div className={style.divButton}>
        <button onClick={handleClose}>X</button>
      </div>
      <h1>{props.name}</h1>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <h2>Gender: {props.gender}</h2>
      <h3>Specie: {props.species}</h3>
    </div>
  );
}
