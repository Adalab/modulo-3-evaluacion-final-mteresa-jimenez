import CharacterCard from "./CharacterCard";
import CharacterFilter from "./CharacterFilter";
import Header from "./Header";

const CharacterList = (props) => {
  const characterslist = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <div>
      <Header />
      <CharacterFilter handleFilter={props.handleFilter} />
      <ul>{characterslist}</ul>
    </div>
  );
};
export default CharacterList;
