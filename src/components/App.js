import api from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  // const [filterText, setFilterText] = useState("");

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  const handleFilter = (filterText) => {
    console.log("ha cambiado", filterText);
  };

  // const filteredCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(filterText.toLowerCase());
  // });

  return (
    <div className="App">
      <Header />
      <CharacterList handleFilter={handleFilter} characters={characters} />
    </div>
  );
};

export default App;
