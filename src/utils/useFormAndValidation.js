import { useState, useCallback } from "react";

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const [errors, setErrors] = useState({});
  const isCheckvalid = () => {
    const checkFromLocal = localStorage.getItem("checked")
    if(checkFromLocal !== "undefined") {
      const check = JSON.parse(checkFromLocal)
      return check
    }
  }
  const check = isCheckvalid();
  const [checked, setChecked] = useState(check || false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity());
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    console.log(values);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity());
  };

  function chengeCheckbox() {
    setChecked(!checked);
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleBlur,
    isInputValid,
    resetForm,
    checked,
    chengeCheckbox,
  };
}

export default useFormAndValidation;
