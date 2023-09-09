import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
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
    <section className="relative z-30">
      <input
        className="p-5 w-full"
        type="search"
        placeholder="Search for movies by title"
        value={searchInput}
        onChange={handleChange}
      />
      <section className="absolute w-full bg-slate-600">
        {movieSearchList?.results.map((item) => (
          <Link to={`/movie/${item.id}/${item.title}`}>
            <article>
              {console.log(item)}
              <h2>{item.title}</h2>
              {item?.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${item?.poster_path}`}
                  alt={item.title}
                />
              ) : (
                <p>No movie poster found</p>
              )}
            </article>
          </Link>
        ))}
      </section>
    </section>
  );
};
export default SearchBar;
