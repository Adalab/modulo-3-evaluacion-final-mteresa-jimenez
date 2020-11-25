import logo from "../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="Logo con el nombre de la serie - Rick y Morty"
        className="logo"
      />
      <h2 className="subtitle">
        <span>
          "No me vas a creer, porque casi nunca pasa, pero cometí un error."
        </span>{" "}
        <br />- Rick, quien, obviamente, nunca había trabajado en React.
      </h2>
    </header>
  );
};

export default Header;
