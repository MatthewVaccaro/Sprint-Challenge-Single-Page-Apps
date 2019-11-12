import React, { useState, useEffect } from "react";

function SearchForm(props) {
  const { isSearching, setSearching, setSearchValue, searchValue } = props;

  return (
    <section className="search-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearching(!isSearching);
        }}
      >
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          placeholder="Rick Sanchez"
          value={searchValue.value}
          onChange={e => {
            setSearchValue({ ...searchValue, value: e.target.value });
          }}
        />
        <button type="submit">
          {isSearching ? "Clear Search " : "Search"}
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
