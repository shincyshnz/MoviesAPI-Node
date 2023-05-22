import React, { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL = "http://localhost:3005/api/movies";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  // Handle onChange event in input
  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  // Clear input filed when close button is clicked
  const clearSearch = () => {
    setSearchInputValue("");
    setSearchList([]);
  };

  // Fetch Movies API
  const fetchMovies = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          movieName: searchInputValue,
        },
      });
      setSearchList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInputValue) fetchMovies();
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputValue]);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="public/searchbar-images/search-glass.png"
          alt="Search for a movie"
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />

      <SearchList searchList={searchList} />
    </div>
  );
};
