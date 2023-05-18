import "./MoviesCard.css";

function MoviesCard({
  saved,
  el,
  handleLikeCard,
  handleDisLikeCard,
  onCheckLike,
}) {
  const { nameRU, duration, trailerLink, image, id } = el;

  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  const finallyTime = `${hours ? `${hours}ч` : ""} ${
    minutes ? `${minutes}мин` : ""
  }`;

  let isLiked = onCheckLike(id);

  function onLikeCard() {
    if (!isLiked) {
      handleLikeCard(el);
      return;
    } else {
      handleDisLikeCard(el, false)
    }
  }

  function disLikeCard() {
    console.log(el);
    handleDisLikeCard(el, true);
  }

  return (
    <li className="movies-card">
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__img"
          src={saved ? image : `https://api.nomoreparties.co/${image.url}`}
          alt={nameRU}
        ></img>
      </a>
      <div className="movies-card__container">
        <p className="movies-card__name">{nameRU}</p>
        {saved ? (
          <button
            className="movies-card__button movies-card__button_delete"
            onClick={disLikeCard}
          ></button>
        ) : (
          <button
            className={`movies-card__button ${
              isLiked ? "movies-card__button_liked" : ""
            }`}
            onClick={!saved && onLikeCard}
          ></button>
        )}
      </div>
      <p className="movies-card__duration">{finallyTime}</p>
    </li>
  );
}

export default MoviesCard;
