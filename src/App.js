import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";

function App() {
  let [characters, setCharacters] = React.useState([]);

  const onSearch = (character) => {
    if (characters.find((el) => el.id === parseInt(character)))
      // compruebo que el personaje no se encuentre en la lista
      return alert("El personaje ya se encuentra en la lista");
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Personaje inexistente");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <Routes>
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
