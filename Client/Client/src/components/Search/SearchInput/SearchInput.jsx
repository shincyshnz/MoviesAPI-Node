import React from "react";
import "./SearchInput.css";

export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        value={searchInputValue}
        placeholder="Search here"
        onChange={handleChange}
      />
      {searchInputValue && (
        <button onClick={clearSearch}>
          <img src="../searchbar-images/close.png" alt="close" />
        </button>
      )}
    </div>
  );
};
