import arrow from "../../images/arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <p className="portfolio__paragraph">Портфолио</p>
        <ul className="portfolio__list">
          <li className="portfolio__list-link">
            <a
              className="portfolio__list-item"
              href="https://github.com/senak322/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </a>
          </li>

          <li className="portfolio__list-link">
            <a
              className="portfolio__list-item"
              href="https://github.com/senak322/russian.travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </a>
          </li>

          <li className="portfolio__list-link">
            <a
              className="portfolio__list-item"
              href="https://github.com/senak322/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка в бок для перехода на сайт"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
