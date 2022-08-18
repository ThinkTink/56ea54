function tagFilter(movies, tagsSelected) {
    //Idea behind this is to filter the list of movies taken from the data folder, and remove any movies with
    //the tags that have been identified in the list.
    return movies.filter((movie) =>
        movie.genre.includes(tagsSelected[0].toLowerCase())
    );
}

export default tagFilter;
