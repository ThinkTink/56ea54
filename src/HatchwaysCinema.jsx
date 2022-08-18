import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

// Candidate fetch API here
import movies from "./data/movies.json";
import "./css/global.scss";

function HatchwaysCinema() {
  const data = movies.movies;

  const [filteredMovies, setFilteredMovies] = useState(data);
  const [selectedMovie, setSelectedMovie] = useState(data[0]);

  return (
    <div>
      <Navbar selectedMovie={selectedMovie} />

      <div className="wrapper">
        <SearchBar
          movies={data}
          genreList={movies.genre}
          setFilteredMovies={setFilteredMovies}
        />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default HatchwaysCinema;
