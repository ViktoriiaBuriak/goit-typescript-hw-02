import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const inputValue = form.elements.inputValue.value.toLowerCase();

    if (form.elements.inputValue.value.trim() === "") {
      const notify = () => toast.error("Please enter search term!");
      return notify();
    }
    onSearch(inputValue);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="inputValue"
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
        <Toaster position="top-center" />
      </form>
    </header>
  );
}

export default SearchBar;
