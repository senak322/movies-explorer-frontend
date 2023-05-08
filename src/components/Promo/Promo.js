import "./Promo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Promo({ isLoggedIn, width, isBurgerActive, handleToggleBurger }) {
  return (
    <header className="promo">
      {isLoggedIn ? (
        <Header
          width={width}
          isBurgerActive={isBurgerActive}
          handleToggleBurger={handleToggleBurger}
          isPromo={true}
        />
      ) : (
        <section className="promo__header">
          <img className="promo__logo" src={logo} alt="logo"></img>
          <div>
            <Link
              to="/signup"
              className="promo__link promo__link_type_register"
            >
              Регистрация
            </Link>
            <Link to="/signin" className="promo__link promo__link_type_signin">
              Войти
            </Link>
          </div>
        </section>
      )}
      
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </header>
  );
}

export default Promo;
