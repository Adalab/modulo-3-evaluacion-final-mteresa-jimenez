import api from "../services/api";
import { useState, useEffect } from "react";

const App = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  const charactersList = characters.map((character) => {
    return <li>{character.name}</li>;
  });
  return (
    <div className="App">
      <ul>{charactersList}</ul>
    </div>
  );
};

export default App;
