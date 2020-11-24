import { useState } from "react";

const CharacterFilter = (props) => {
  // PASO 1 FILTRO: Creo envento "onChange" y función handleFilter que recoge el "value" del input de texto y subo handleFilter mediante "props" hasta App.
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
