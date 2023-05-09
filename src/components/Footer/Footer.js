import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__discription">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__box">
          <p className="footer__text">© 2023</p>
          <div className="footer__container">
            <a href="https://practicum.yandex.ru/" className="footer__text">Яндекс.Практикум</a>
            <a href="https://github.com/" className="footer__text">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
