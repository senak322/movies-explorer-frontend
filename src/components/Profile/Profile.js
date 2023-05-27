import { useEffect, useCallback } from "react";
import "./Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../utils/useFormAndValidation";
import { EMAILPATTERN } from "../../utils/constants";

function Profile({
  handleLogout,
  isEdit,
  setIsEdit,
  searchErr,
  handleEditProfile,
  setSearchErr,
}) {
  const userContext = useContext(CurrentUserContext);
  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation();

  const cbSetValues = useCallback(() => {
    const formValues = {};
    setValues(formValues);
  }, [setValues]);

  const handleChangeEdit = () => {
    setIsEdit(true);
  };

  const editProfile = () => {
    const name = values.name || userContext.name;
    const email = values.email || userContext.email;
    handleEditProfile(name, email);
  };

  useEffect(() => {
    cbSetValues();
    resetForm();
    setIsEdit(false);
    setSearchErr("");
  }, [cbSetValues, resetForm, setIsEdit, setSearchErr]);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {userContext.name}</h1>
      <form>
        <div className="profile__container">
          <p className="profile__name">Имя</p>
          <input
            className="profile__input profile__name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name || userContext.name}
            disabled={!isEdit}
            required
          ></input>
        </div>
        <div className="profile__container">
          <p className="profile__email">E-mail</p>
          <input
            className="profile__input profile__email"
            name="email"
            type="email"
            pattern={EMAILPATTERN}
            onChange={handleChange}
            value={values.email || userContext.email}
            disabled={!isEdit}
            required
          ></input>
        </div>
      </form>
      <span
        className={`form-span-error ${isValid ? "" : "form-span-error_active"}`}
      >
        {errors.email}
      </span>
      {searchErr && (
        <span className="form-span-error form-span-error_active">
          {searchErr}
        </span>
      )}
      {isEdit ? (
        <button
          className="profile__btn profile__btn_save"
          disabled={
            values.name === userContext.name ||
            values.email === userContext.email ||
            !isValid
          }
          onClick={editProfile}
        >
          Сохранить
        </button>
      ) : (
        <button className="profile__btn" onClick={handleChangeEdit}>
          Редактировать
        </button>
      )}
      <button
        className="profile__btn profile__btn_logout"
        onClick={handleLogout}
      >
        Выйти из аккаунта
      </button>
    </main>
  );
}

export default Profile;
