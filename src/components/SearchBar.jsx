import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/solid";

import "../css/searchbar.scss";
import useSearch from "../hooks/useSearch";
import tagFilter from "../hooks/tagFilter";

function SearchBar({ movies, genreList, setFilteredMovies }) {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  /*
   Ideally I wanted to check if a tag had been selected, in doing so continue to filter the list of movies by removing
   the ones that do not contain the corresponding Genre tag selected.

   if(selectedTags.length>0){
      movies = tagFilter(filteredMovies,selectedTags);
   }
   I figured doing this before filtering the movies using the search term would make it easier to filter using the term.
  **/


  let filteredMovies = useSearch(movies, title);


/*
  I then tried filtering using the search term and then trying to filter using the genre tags selected.

  if(selectedTags.length>0){
    filteredMovies = tagFilter(filteredMovies,selectedTags);
  }

  I realised that doing this wouldn't update the list of movies after selecting the genre, meaning the user would have
  to input the search term again, or at least press enter to search again rather than search automatically.
 **/


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
