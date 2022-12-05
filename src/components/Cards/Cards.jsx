import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.cards}>
      {props.characters.map((character, index) => (
        <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={props.onClose}
          id={character.id}
          key={index}
        />
      ))}
    </div>
  );
}
