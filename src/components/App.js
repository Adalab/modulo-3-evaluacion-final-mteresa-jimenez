import api from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const App = (props) => {
  // state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  // api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  //events

  const handleFilter = (filterText) => {
    return setFilterText(filterText);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterText.toUpperCase());
  });

  console.log(filteredCharacters);

  return (
    <div className="App">
      <CharacterList
        characters={filteredCharacters}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default App;
