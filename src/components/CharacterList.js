import CharacterCard from "./CharacterCard";
import CharacterFilter from "./CharacterFilter";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const characterslist = props.characters.map((character) => {
    return (
      <li className="characters--card" key={character.id}>
        <Link
          className="link-character-detail"
          to={`/character/${character.id}`}
          title="Ir a más información sobre este personaje"
        >
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return (
    <div>
      <Header />
      <CharacterFilter handleFilter={props.handleFilter} />
      <ul className="characters">{characterslist}</ul>
    </div>
  );
};
export default CharacterList;
