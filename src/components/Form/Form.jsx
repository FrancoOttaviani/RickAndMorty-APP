import React, { useState } from "react";
import style from "./Form.module.css";

export default function Form(props) {
  const [userDate, setUserDate] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const validate = (userDate) => {
    console.log("validates");
    const errors = {};
    if (!userDate.userName) {
      errors.userName = "Debe ingresar un usuario";
    } else if (!userDate.password) {
      errors.password = "Debe ingresar una contraseña";
    } else if (!userDate.password) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    return errors;
  };

  const handleChange = (e) => {
    setUserDate({ ...userDate, [e.target.name]: e.target.value });

    setErrors(validate({ ...userDate, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userDate);
  };

  return (
    <div className={style.cardForm}>
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>User Name: </label>
        <input
          className={errors.userName && style.danger}
          onChange={handleChange}
          type="text"
          name={"userName"}
          placeholder="Ingrese su Usuario"
        />

        {errors.userName ? (
          <p className={style.danger}>{errors.userName}</p>
        ) : null}
        <label>Password: </label>
        <input
          className={errors.password && style.danger}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Ingrese su Contraseña"
        />
        {errors.password ? (
          <p className={style.danger}>{errors.password}</p>
        ) : null}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
