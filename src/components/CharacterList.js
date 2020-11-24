import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersList = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return <ul>{charactersList}</ul>;
};
export default CharacterList;
