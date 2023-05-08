import "./Techs.css";
import AboutTitle from "../AboutTitle/AboutTitle";

function Techs() {
  return (
    <section className="techs" id="techs">
      <AboutTitle about="Технологии" />
      <div className="techs__container">
        <h4 className="techs__head">7 технологий</h4>
        <p className="techs__discription">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
