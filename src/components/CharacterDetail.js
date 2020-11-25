import { Link } from "react-router-dom";
import "./CharacterDetail.scss";

const CharacterDetail = (props) => {
  // const characterStatus = (props) => {
  //   const status = props.character.status;
  //   if (status === "Alive") {
  //     return <span>"yes"</span>;
  //   } else {
  //     return <span>"no"</span>;
  //   }
  // };

  return (
    <div className="character-detail">
      <Link to="/"> Volver</Link>
      <div className="character-detail__desktop">
        <img
          className="character-detail__image"
          src={props.character.image}
          alt={"Imagen del personaje" + props.character.name}
        />
        <div>
          <h3 className="character-detail__name">{props.character.name}</h3>
          <p>Status: {props.character.status}</p>
          <p>Origin: {props.character.origin.name}</p>
          <p>Episodes: {props.character.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
