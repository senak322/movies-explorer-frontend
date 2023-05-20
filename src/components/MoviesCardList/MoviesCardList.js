import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  saved,
  films,
  handleMoreFilms,
  searchedErr,
  handleLikeCard,
  moviesArr,
  handleDisLikeCard,
  onCheckLike,
  savedSearchedErr
}) {

  const searchErr = saved ? savedSearchedErr : searchedErr

  return (  
    <section>
      <ul className="movies-list">
        {searchErr && (
          <p className="movies-list__description">{searchErr}</p>
        )}

        {!moviesArr
          ? ""
          : films.length > 0
          ? films.map((el) => {
              return (
                <MoviesCard
                  key={saved ? el._id : el.id}
                  saved={saved}
                  el={el}
                  handleLikeCard={handleLikeCard}
                  handleDisLikeCard={handleDisLikeCard}
                  onCheckLike={onCheckLike}
                />
              );
            })
          : ""}
      </ul>
      {!saved && moviesArr.length > films.length && (
        <button onClick={handleMoreFilms} className="movies-list-btn">
          Ещё
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
