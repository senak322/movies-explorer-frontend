import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ width, isBurgerActive, handleToggleBurger, isPromo }) {
  const setActive = ({ isActive }) =>
    isActive ? "header__link header__link_active" : "header__link";

  return (
    <header className={`header ${isPromo ? "header_promo" : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo"></img>
      </Link>

      {width > 768 ? (
        <>
          <div className="header__wrapper">
            <NavLink className={setActive} to="/movies">
              Фильмы
            </NavLink>
            <NavLink className={setActive} to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink className={setActive} to="/profile">
            <p className="header-profile">Аккаунт</p>
          </NavLink>
        </>
      ) : (
        <Navigation
          isBurgerActive={isBurgerActive}
          handleToggleBurger={handleToggleBurger}
        />
      )}
    </header>
  );
}

export default Header;
