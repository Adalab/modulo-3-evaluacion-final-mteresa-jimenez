const CharacterCard = (props) => {
  return (
    <>
      <img
        className="characters--card__image"
        src={props.character.image}
        alt={"Imagen del personaje " + props.character.name}
      />
      <p className="characters--card__name">{props.character.name}</p>
      <p>{props.character.species}</p>
    </>
  );
};
export default CharacterCard;
