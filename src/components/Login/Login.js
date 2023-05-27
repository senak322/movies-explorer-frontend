import Form from "../Form/Form";
import { Navigate } from "react-router-dom";

function Login({ handleLogin, isLoggedIn, searchErr, setSearchErr }) {
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <Form
      isRegister={false}
      heading="Рады видеть!"
      buttonText="Войти"
      areRegistered="Ещё не зарегистрированы?"
      link="/signup"
      linkBtn="Регистрация"
      onSubmit={handleLogin}
      searchErr={searchErr}
      setSearchErr={setSearchErr}
    />
  );
}

export default Login;
