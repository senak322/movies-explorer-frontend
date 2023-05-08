import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="error-page">
      <div className="error-page__wrapper">
        <h1 className="error-page__header">404</h1>
        <p className="error-page__discription">Страница не найдена</p>
      </div>
      <button type="button" onClick={goBack} className="error-page__back-btn">
        Назад
      </button>
    </main>
  );
}
export default ErrorPage;
