import Form from "../Form/Form";

function Login() {
  return (
    <Form
      isRegister={false}
      heading="Рады видеть!"
      buttonText="Войти"
      areRegistered="Ещё не зарегистрированы?"
      link="/signup"
      linkBtn="Регистрация"
    />
  );
}

export default Login;
