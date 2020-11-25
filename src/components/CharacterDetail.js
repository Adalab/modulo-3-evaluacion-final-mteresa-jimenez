import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <div className="character-detail">
      <Link to="/">Volver</Link>
      <div>
        <img src={props.character.image} alt="" />
        <div>
          <h3>{props.character.name}</h3>
          <p>Status: {props.character.status}</p>
          <p>Origin: {props.character.origin.name}</p>
          <p>Episodes: {props.character.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
