import style from "./Card.module.css";

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
      <img src={props.image} alt={props.name} />
      <h2>Gender: {props.gender}</h2>
      <h3>Specie: {props.species}</h3>
    </div>
  );
}
