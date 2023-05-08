import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ isLoggedIn, width, isBurgerActive, handleToggleBurger }) {
  return (
    <>
      <Promo
        isLoggedIn={isLoggedIn}
        width={width}
        isBurgerActive={isBurgerActive}
        handleToggleBurger={handleToggleBurger}
      />
      <main>
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </>
  );
}

export default Main;
