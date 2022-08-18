import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/solid";

import "../css/searchbar.scss";
import useSearch from "../hooks/useSearch";

function SearchBar({ movies, genreList, setFilteredMovies }) {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredMovies = useSearch(movies, title);

  useEffect(() => {
    setFilteredMovies(filteredMovies);
  }, [title]);

  const handleMovieTitleChange = (e) => {
    const { value } = e.target;

    setTitle(value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (!selectedTags.includes(value)) {
      const newSelectedTags = [...selectedTags, value];
      setSelectedTags(newSelectedTags);
    }
  };

  const deleteTag = (tag) => {};

  return (
    <div className="searchBarWrapper">
      <h1> Movies of the Week </h1>

      <div className="searchBar">
        <input
          type="text"
          aria-label="search by title"
          name="search by title"
          placeholder="Search Movie By Title..."
          onChange={handleMovieTitleChange}
        />
        <div className="filter">
          <select onChange={handleChange}>
            <option value="0"> Genre: </option>
            {genreList.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="tagsContainer">
        {selectedTags.map((tag) => (
          <div className="selectedTag" key={tag} onClick={() => deleteTag(tag)}>
            {tag} <XIcon className="deleteIcon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  movies: PropTypes.array,
  genreList: PropTypes.array,
  setFilteredMovies: PropTypes.func,
};
