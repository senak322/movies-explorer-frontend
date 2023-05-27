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
  pattern
}) {
  return (
    <>
      <label className="form-label" htmlFor="name">
        {label}
      </label>
      <input
        className={`form-input ${
          errors[name] === "" ? "" : "form-input_error"
        }`}
        id={name}
        name={name}
        type={type}
        required
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        pattern={pattern}
      ></input>
      <span
        className={`form-span-error ${
          isValid ? "" : "form-span-error_active"
        }`}
      >
        {errors[name]}
      </span>
    </>
  );
}

export default FormInput;
