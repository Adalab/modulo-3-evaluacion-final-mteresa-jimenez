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

  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
