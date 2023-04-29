import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo"></img>
      </Link>
    </header>
  );
}

export default Header;
