import React from "react";
import CharacterCard from "./CharacterCard";
import CharacterFilter from "./CharacterFilter";

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
      <CharacterFilter handleFilter={props.handleFilter} />
      <ul>{characterslist}</ul>
    </div>
  );
};
export default CharacterList;
