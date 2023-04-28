import AboutTitle from "../AboutTitle/AboutTitle";
import "./AboutMe.css";
import myImage from "../../images/myimage.jpeg";
import arrow from "../../images/arrow.svg";

function AboutMe() {
  return (
    <section className="about-me">
      <AboutTitle about="Студент" />
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__wrapper">
            <h2 className="about-me__title">Александр Визный</h2>
            <p className="about-me__discription">
              Фронтенд-разработчик, 24 года
            </p>
            <p className="about-me__life">
              {/* Я родился в Москве в 70–ом на краю города, Моча рано ударила в
              голову: В 4 активно ругался матом, В детском саду девочки впервые
              показали мне п***у. Потом школа, вонючая форма, драки, клей — Так
              я становился сильней. */}
              Я родился в Москве, закончил колледж. Работал в банках. В один
              момент решил изменить свою жизнь и начал изучать веб разработку. С
              2022 года работаю в компании «Центр Поддержки Семейного
              Образования» на должности Фронтенд-разработчик. В планах и дальше
              развиваться в этой сфере и добиваться больших высот.
            </p>
          </div>
          <a
            href="https://github.com/senak322"
            target="_blank"
            rel="noreferrer"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <div className="about-me__info">
          <img
            className="about-me__image"
            src={myImage}
            alt="Фото студента на фоне озера"
          ></img>
        </div>
      </div>
      <div className="about-me__repo">
        <p className="about-me__paragraph">Портфолио</p>
        <ul className="about-me__list">
          <a
            className="about-me__list-link"
            href="https://github.com/senak322/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <li className="about-me__list-item">
              Статичный сайт
              <img className="about-me__arrow" src={arrow} alt="Стрелка в бок для перехода на сайт"></img>
            </li>
          </a>

          <a
            className="about-me__list-link"
            href="https://github.com/senak322/russian.travel"
            target="_blank"
            rel="noreferrer"
          >
            <li className="about-me__list-item">
              Адаптивный сайт
              <img className="about-me__arrow" src={arrow} alt="Стрелка в бок для перехода на сайт"></img>
            </li>
          </a>

          <a
            className="about-me__list-link"
            href="https://github.com/senak322/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <li className="about-me__list-item">
              Одностраничное приложение
              <img className="about-me__arrow" src={arrow} alt="Стрелка в бок для перехода на сайт"></img>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
