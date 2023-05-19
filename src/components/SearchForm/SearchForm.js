import { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormAndValidation from "../../utils/useFormAndValidation";

function SearchForm({
  handleGetAllMovies,
  searchErr,
  setSearchErr,
  handleGetSavedMovies,
  saved,
  onCheckBox,
}) {
  const input = localStorage.getItem("input");
  const inputToState = input === null ? "" : input;

  const [inputValue, setInputValue] = useState(inputToState || "");

  const { checked, chengeCheckbox, isValid } = useFormAndValidation();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.search.value === "") {
      return setSearchErr("Нужно ввести ключевое слово");
    }
    saved
      ? handleGetSavedMovies(inputValue, checked)
      : handleGetAllMovies(inputValue, checked);

    setSearchErr("");
  };

  const handleChangeCheckBox = () => {
    chengeCheckbox();
    onCheckBox(checked);
  };

  useEffect(() => {
    if (!saved) {
      setInputValue(inputToState);
    } else {
      setInputValue("");
    }
  }, [saved, inputToState]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__wrapper">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="search"
            onChange={handleChange}
            required
            value={inputValue}
          ></input>

          <button className="search__submit-btn" type="submit">
            Найти
          </button>
        </div>
        <span
          className={`search__error ${isValid ? "" : "search__error_active"}`}
        >
          {searchErr}
        </span>
        <FilterCheckbox
          isChecked={checked}
          onChengeCheckbox={handleChangeCheckBox}
        />
      </form>
    </section>
  );
}

export default SearchForm;
