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
    </header>
  );
};

export default Header;
