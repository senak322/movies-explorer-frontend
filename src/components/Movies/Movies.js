import { useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  isLoading,
  saved,
  handleFilmsToShow,
  filmsToShow,
  handleMoreFilms,
  handleGetAllMovies,
  searchErr,
  setSearchErr,
  searchedErr,
  handleLikeCard,
  handleGetSavedMovies,
  moviesArr,
  handleDisLikeCard,
  onCheckBox,
  onCheckLike
}) {
  useEffect(() => {
    handleFilmsToShow();
  }, [handleFilmsToShow]);

  return (
    <main className="movies">
      <div
        className={`movies__wrapper ${saved ? "movies__wrapper_saved" : ""}`}
      >
        <SearchForm
          handleGetAllMovies={handleGetAllMovies}
          searchErr={searchErr}
          setSearchErr={setSearchErr}
          handleGetSavedMovies={handleGetSavedMovies}
          saved={saved}
          onCheckBox={onCheckBox}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            saved={saved}
            films={filmsToShow}
            handleMoreFilms={handleMoreFilms}
            searchedErr={searchedErr}
            handleLikeCard={handleLikeCard}
            moviesArr={moviesArr}
            handleDisLikeCard={handleDisLikeCard}
            onCheckLike={onCheckLike}
          />
        )}
      </div>
    </main>
  );
}
export default Movies;
