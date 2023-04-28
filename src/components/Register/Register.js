import Form from "../Form/Form";

function Register() {
  return (
    <Form isRegister={true} heading="Добро пожаловать!" buttonText="Зарегистрироваться" areRegistered="Уже зарегистрированы?" link="/signin" linkBtn="Войти" />
  );
}

export default Register;
