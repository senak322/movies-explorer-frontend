import Form from "../Form/Form";
import { Navigate } from "react-router-dom";

function Register({ handleRegister, isLoggedIn, searchErr, setSearchErr }) {
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <Form
      isRegister={true}
      heading="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      areRegistered="Уже зарегистрированы?"
      link="/signin"
      linkBtn="Войти"
      onSubmit={handleRegister}
      searchErr={searchErr}
      setSearchErr={setSearchErr}
    />
  );
}

export default Register;
