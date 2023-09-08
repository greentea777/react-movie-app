import { useState } from "react";
import useFetch from "../hooks/useFetch";
const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0ZDUzZGYzOWI4YTIwYmFlNTcwNDg0YmFiM2NjMSIsInN1YiI6IjY0ZWUzMjY3ZTBjYTdmMDBhZTM4MGFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUCQ6FTPC4_DjGiswyCvLGlWbeHWSe42IxwHAdl9m_k",
  },
};
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const {
    data: movieSearchList,
    loading: isMovieSearchListLoading,
    error: movieSearchListError,
  } = useFetch(
    `${MOVIE_DB_API_URL}/search/movie?query=${searchInput}&include_adult=false&language=en-CA&page=1&region=CA`,
    options
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input
        className="p-5 w-full"
        type="search"
        placeholder="Search for movies by title"
        value={searchInput}
        onChange={handleChange}
      />
      {movieSearchList?.results.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </>
  );
};
export default SearchBar;
