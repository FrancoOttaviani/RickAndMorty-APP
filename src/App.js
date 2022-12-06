import React, { useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = React.useState([]);

  const [acces, setAcces] = React.useState(false);
  const userName = "francootta@hotmail.com";
  const password = "1234";

  const login = (userData) => {
    if (userData.userName === userName && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !acces && navigate("/");
  }, [acces]);

  const location = useLocation();

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
      <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>
      <Routes>
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
