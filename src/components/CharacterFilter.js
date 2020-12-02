import "./CharacterFilter.scss";

const CharacterFilter = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
    ev.preventDefault();
  };

  const handleChangeStatus = (ev) => {
    props.handleChangeStatus(ev.target.value);
  };

  return (
    <form className="form">
      <label htmlFor="characterName">Busca a un personaje: </label>
      <input
        className="filter-text"
        id="characterName"
        type="text"
        onChange={handleFilter}
      />
      <label htmlFor="status">Filtrar por status: </label>
      <select
        className="filter-text"
        name="status"
        id="status"
        onChange={handleChangeStatus}
      >
        <option value="all">Todos</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
      </select>
    </form>
  );
};

export default CharacterFilter;
