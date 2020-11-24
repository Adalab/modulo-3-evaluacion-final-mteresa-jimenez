import api from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const App = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  const handleFilter = (filterText) => {
    console.log("ha cambiado", filterText);
  };

  return (
    <div className="App">
      <CharacterList characters={characters} handleFilter={handleFilter} />
    </div>
  );
};

export default App;
