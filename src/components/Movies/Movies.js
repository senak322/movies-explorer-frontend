import { useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import { films, savedFilms } from "../../vendor/films";

function Movies({ isLoading, saved, handleFilmsToShow, filmsToShow, handleMoreFilms, movies }) {

  useEffect(() => {
    handleFilmsToShow();
  }, [handleFilmsToShow]);

  return (
    <main className="movies">
      <div className={`movies__wrapper ${saved ? "movies__wrapper_saved" : ""}`}>
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList saved={saved} films={filmsToShow} handleMoreFilms={handleMoreFilms} movies={movies} />
        )}
      </div>
    </main>
  );
}
export default Movies;
