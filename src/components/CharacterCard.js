const CharacterCard = (props) => {
  return (
    <div>
      {props.character.name}
      <img
        src={props.character.image}
        alt={"Imagen del personaje " + props.character.name}
      />
      {props.character.species}
    </div>
  );
};
export default CharacterCard;
