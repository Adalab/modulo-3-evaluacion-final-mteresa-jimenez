import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo con el nombre de la serie - Rick y Morty" />
      <p>
        <strong>
          "No me vas a creer, porque casi nunca pasa, pero cometí un error."
        </strong>
        - Rick, quien obviamente nunca había trabajado en React.
      </p>
    </header>
  );
};

export default Header;
