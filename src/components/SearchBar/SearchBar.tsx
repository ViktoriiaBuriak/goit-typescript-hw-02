import { FC, FormEvent } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (inputValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searchValue = (evt.target as HTMLFormElement).elements.namedItem(
      "inputValue"
    ) as HTMLFormElement;

    if (searchValue.value === "") {
      const notify = () => toast.error("Please enter search term!");
      return notify();
    }
    onSearch(searchValue.value.toLowerCase());
    evt.currentTarget.reset();
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
};

export default SearchBar;
