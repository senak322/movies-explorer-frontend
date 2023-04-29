import "../FormInput/FormInput.css";

function FormInput({
  label,
  name,
  type,
  values,
  handleChange,
  handleBlur,
  isValid,
  errors,
}) {
  return (
    <>
      <label className="form-input__label" htmlFor="name">
        {label}
      </label>
      <input
        className={`form-input__input ${
          errors[name] === "" ? "" : "form-input__input_error"
        }`}
        id={name}
        name={name}
        type={type}
        required
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      <span
        className={`form-input__error ${
          isValid ? "" : "form-input__error_active"
        }`}
      >
        {errors[name]}
      </span>
    </>
  );
}

export default FormInput;
