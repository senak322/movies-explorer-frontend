import MoviesCard from "../MoviesCard/MoviesCard";
// import pic1 from "../../images/pic1.png";
import "./MoviesCardList.css";

function MoviesCardList({ saved, films, handleMoreFilms, movies }) {
  const savedMovies = films.slice(0, 2);

  return (
    <section>
      <ul className="movies-list">
        {saved
          ? savedMovies.map((el, index) => {
              return (
                <MoviesCard
                  key={index}
                  saved={saved}
                  isLiked={el.isLiked}
                  image={el.image}
                  name={el.name}
                  duration={el.duration}
                />
              );
            })
          : films.map((el, index) => {
              return (
                <MoviesCard
                  key={index}
                  saved={saved}
                  isLiked={el.isLiked}
                  image={el.image}
                  name={el.name}
                  duration={el.duration}
                />
              );
            })}
      </ul>
      {!saved && movies.length > films.length && (
        <button onClick={handleMoreFilms} className="movies-list-btn">
          Ещё
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
