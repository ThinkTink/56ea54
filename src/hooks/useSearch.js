function useSearch(movies, titleKeyword) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleKeyword.toLowerCase())
  );
}

export default useSearch;
