import api from "../services/api";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import "./App.scss";

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

  const renderCharacterDetail = (props) => {
    const routerCharacterId = parseInt(props.match.params.id);
    const characterId = characters.find((character) => {
      return character.id === routerCharacterId;
    });
    if (characterId === undefined) {
      return <p>"El personaje que buscas no existe"</p>;
    } else {
      return <CharacterDetail character={characterId} />;
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CharacterList
            characters={filteredCharacters}
            handleFilter={handleFilter}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
