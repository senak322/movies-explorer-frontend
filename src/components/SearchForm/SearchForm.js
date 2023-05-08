import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormAndValidation from "../../utils/useFormAndValidation";

function SearchForm() {
  const { checked, chengeCheckbox } = useFormAndValidation();

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__wrapper">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="search__submit-btn" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox isChecked={checked} onChengeCheckbox={chengeCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;
