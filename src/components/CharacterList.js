import CharacterCard from "./CharacterCard";
import CharacterFilter from "./CharacterFilter";
import Header from "./Header";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const characterslist = props.characters.map((character) => {
    return (
      <li className="characters--card" key={character.id}>
        <CharacterCard character={character} />
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
