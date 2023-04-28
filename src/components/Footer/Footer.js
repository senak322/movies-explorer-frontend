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
            <p className="footer__text">Яндекс.Практикум</p>
            <p className="footer__text">Github</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
