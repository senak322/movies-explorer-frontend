import arrow from "../../images/arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <p className="portfolio__paragraph">Портфолио</p>
        <ul className="portfolio__list">
          <a
            className="portfolio__list-link"
            href="https://github.com/senak322/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <li className="portfolio__list-item">
              Статичный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </li>
          </a>

          <a
            className="portfolio__list-link"
            href="https://github.com/senak322/russian.travel"
            target="_blank"
            rel="noreferrer"
          >
            <li className="portfolio__list-item">
              Адаптивный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </li>
          </a>

          <a
            className="portfolio__list-link"
            href="https://github.com/senak322/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <li className="portfolio__list-item">
              Одностраничное приложение
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
