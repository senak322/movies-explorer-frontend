import "./MoviesCard.css";

function MoviesCard({ saved, image, name, duration, isLiked, index }) {
  return (
    <li className="movies-card" key={index}>
      <img className="movies-card__img" src={image} alt={name}></img>
      <div className="movies-card__container">
        <p className="movies-card__name">{name}</p>
        {saved ? (
          <button className="movies-card__button movies-card__button_delete"></button>
        ) : (
          <button
            className={`movies-card__button ${
              isLiked ? "movies-card__button_liked" : ""
            }`}
          ></button>
        )}
      </div>
      <p className="movies-card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
