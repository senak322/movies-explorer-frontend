import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, onChengeCheckbox }) {

  return (
    <div className={isChecked ? "filter" : "filter filter_disabled"}>
      <input
        className="filter__checkbox"
        id="filter"
        type="checkbox"
        name="filter"
        checked={isChecked}
        onChange={onChengeCheckbox}
      ></input>
      <label className={isChecked ? "filter__label" : "filter__label filter__label_disabled"} htmlFor="filter">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
