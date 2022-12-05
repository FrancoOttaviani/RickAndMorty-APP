import React from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  let [character, setCharacter] = React.useState();

  const random = () => {
    return Math.floor(Math.random() * 825);
  };

  return (
    <div className={style.divSearchBar}>
      <label htmlFor="">Id: </label>
      <input
        type="search"
        name="search"
        placeholder="Ingrese ID"
        onChange={(e) => setCharacter((character = e.target.value))}
      />
      <button type="submit" onClick={() => props.onSearch(character)}>
        Agregar
      </button>
      <button type="submit" onClick={() => props.onSearch(random())}>
        Random Character
      </button>
    </div>
  );
}
