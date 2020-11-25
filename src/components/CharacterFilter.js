import { useState } from "react";
import "./CharacterFilter.scss";

const CharacterFilter = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="characterName">Busca a un personaje: </label>
      <input
        className="filter-text"
        id="characterName"
        type="text"
        onChange={handleFilter}
      />
    </form>
  );
};

export default CharacterFilter;
