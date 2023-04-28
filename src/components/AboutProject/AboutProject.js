import "./AboutProject.css";
import AboutTitle from "../AboutTitle/AboutTitle";

function AboutProject() {
  return (
    <section className="about">
      <AboutTitle about="О проекте" />
      <div className="about__wrapper">
        <div className="about__container">
          <h4 className="about__time">Дипломный проект включал 5 этапов</h4>
          <p className="about__time-discription">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h4 className="about__time">На выполнение диплома ушло 5 недель</h4>
          <p className="about__time-discription">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__wrapper-time">
        <div className="about__week">
          <h5 className="about__time-count">1 неделя</h5>
          <p className="about__web">Back-end</p>
        </div>
        <div className="about__week">
          <h5 className="about__time-count about__time-count_type_front">
            4 недели
          </h5>
          <p className="about__web">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
