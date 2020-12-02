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
  const [filterStatus, setFilterStatus] = useState("all");

  // api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //events

  const handleFilter = (filterText) => {
    return setFilterText(filterText);
  };

  const handleChangeStatus = (filterStatus) => {
    setFilterStatus(filterStatus);
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(filterText.toUpperCase());
    })
    .filter((character) => {
      return filterStatus === "all" || character.status === filterStatus;
    });

  const renderCharacterDetail = (props) => {
    const routerCharacterId = parseInt(props.match.params.id);
    const characterId = characters.find((character) => {
      return character.id === routerCharacterId;
    });
    console.log(characterId);
    if (characterId) {
      return <CharacterDetail character={characterId} />;
    } else {
      return (
        <div>
          <p className="not-exist">El personaje que buscas no existe.</p>
          <h2 className="subtitle">
            <span>
              "No me vas a creer, porque casi nunca pasa, pero cometí un error."
            </span>{" "}
            <br />- Rick, quien, obviamente, nunca había trabajado en React.
          </h2>
          ;
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CharacterList
            characters={filteredCharacters}
            handleFilter={handleFilter}
            handleChangeStatus={handleChangeStatus}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
