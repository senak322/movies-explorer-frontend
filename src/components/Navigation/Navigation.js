import burger from "../../images/burger.svg";
import close from "../../images/close.svg";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isBurgerActive, handleToggleBurger }) {
  const setActive = ({ isActive }) =>
    isActive ? "header__link header__link_active" : "header__link";

  return (
    <nav className={`navigation ${isBurgerActive ? "navigation_active" : ""}`}>
      <img
        className={`navigation__img ${
          isBurgerActive ? "navigation__img_close" : ""
        }`}
        src={isBurgerActive ? close : burger}
        alt="toggle navigation"
        onClick={handleToggleBurger}
      ></img>
      <div
        className={`navigation__links ${
          isBurgerActive ? "navigation__links_active" : ""
        }`}
      >
        <ul className="navigation__links-list">
          <div className="navigation__wrapper">
            <li className="navigation__item">
              <NavLink className={setActive} to="/">
                Главная
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className={setActive} to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className={setActive} to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </li>
          </div>
          <li className="navigation__item">
            <NavLink className={setActive} to="/profile">
              <p className="header__link_type_profile">Аккаунт</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
