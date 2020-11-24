import { useState } from "react";

const CharacterFilter = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="characterName">Escribe el nombre de un personaje:</label>
      <input id="characterName" type="text" onChange={handleFilter} />
    </form>
  );
};

export default CharacterFilter;
