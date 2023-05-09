import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import { films } from "../../vendor/films";

function App() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filmsToShow, setFilmsToShow] = useState([]);
  const [movies, setMovies] = useState(films);

  const hasWindow = typeof window !== "undefined";

  function handleToggleBurger() {
    setIsBurgerActive(!isBurgerActive);
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const handleFilmsToShow = useCallback(() => {
    if (width > 769) {
      const newFilms = movies.slice(0, 16);
      setFilmsToShow(newFilms);
    }
    if (500 < width && width < 769) {
      const newFilms = movies.slice(0, 8);
      setFilmsToShow(newFilms);
    }
    if (width < 500) {
      const newFilms = movies.slice(0, 5);
      setFilmsToShow(newFilms);
    }
  }, [width, movies]);

  function handleMoreFilms() {
    const showMoviesLength = filmsToShow.length;
    const moreMoviesToShow = movies.slice(
      showMoviesLength,
      showMoviesLength + 4
    );
    setFilmsToShow([...filmsToShow, ...moreMoviesToShow]);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, [hasWindow]);

  return (
    <div className="App">
      {(pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile") && (
        <Header
          width={width}
          isBurgerActive={isBurgerActive}
          handleToggleBurger={handleToggleBurger}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              width={width}
              isBurgerActive={isBurgerActive}
              handleToggleBurger={handleToggleBurger}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              isLoading={isLoading}
              saved={false}
              handleFilmsToShow={handleFilmsToShow}
              filmsToShow={filmsToShow}
              handleMoreFilms={handleMoreFilms}
              movies={movies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <Movies
              isLoading={isLoading}
              saved={true}
              handleFilmsToShow={handleFilmsToShow}
              filmsToShow={filmsToShow}
              handleMoreFilms={handleMoreFilms}
              movies={movies}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile handleLogout={handleLogout} />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {(pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies") && <Footer />}
    </div>
  );
}

export default App;
