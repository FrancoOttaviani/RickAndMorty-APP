import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          alert("No existe personaje con ese ID");
        }
      })
      .catch((err) => console.log(err));
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.detail}>
      <div>
        <Link to={"/home"}>
          <button>Atras</button>
        </Link>
        <h1>{character.name}</h1>
        <p>Status: {character.status}</p>
        <h4>Specie: {character.species}</h4>
        <h4>Gender: {character.gender}</h4>
      </div>
      <div>
        <img src={character.image} alt={character.name} srcset="" />
      </div>
    </div>
  );
}
