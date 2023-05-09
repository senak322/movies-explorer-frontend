import { useEffect, useCallback } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Form.css";
import useFormAndValidation from "../../utils/useFormAndValidation";
import FormInput from "../FormInput/FormInput";

function Form({
  isRegister,
  heading,
  buttonText,
  areRegistered,
  link,
  linkBtn,
}) {
  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    // isInputValid,
    resetForm,
  } = useFormAndValidation();

  const cbSetValues = useCallback(() => {
    const formValues = {};
    setValues(formValues);
  }, [setValues]);

  useEffect(() => {
    cbSetValues();
    resetForm();
  }, [cbSetValues, resetForm]);

  return (
    <main className="form">
      <div className="form__wrapper">
        <Link to="/">
          <img className="form__logo" src={logo} alt="logo"></img>
        </Link>
        <h1 className="form__heading">{heading}</h1>
        <form className="form__container">
          <fieldset className="form__fieldset">
            {isRegister && (
              <FormInput
                label="Имя"
                name="name"
                type="text"
                values={values}
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                handleBlur={handleBlur}
                //   isInputValid={isInputValid}
              />
            )}
            <FormInput
              label="E-mail"
              name="email"
              type="email"
              values={values}
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              handleBlur={handleBlur}
              // isInputValid={isInputValid}
            />
            <FormInput
              label="Пароль"
              name="password"
              type="password"
              values={values}
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              handleBlur={handleBlur}
              // isInputValid={isInputValid}
            />
          </fieldset>
          <button className="form__btn" disabled={isValid ? false : true}>
            {buttonText}
          </button>
          <div className="form__questions">
            <p className="form__question">{areRegistered}</p>
            <Link className="form__link-btn" to={link}>
              {linkBtn}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Form;
