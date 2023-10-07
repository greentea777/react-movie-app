import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaStar, FaPlay } from "react-icons/fa6";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import searchPosterFallbackImg from "../assets/images/90x138.svg";

const SearchBar = ({
  searchInput,
  setSearchInput,
  toggleSearchBar,
  handleNavLinkClick,
}) => {
  const {
    data: movieSearchList,
    loading: isMovieSearchListLoading,
    error: movieSearchListError,
  } = useFetch(
    `${MOVIE_DB_API_URL}/search/movie?query=${searchInput}&include_adult=false&language=en-CA&page=1&region=CA`,
    options
  );

  const {
    data: trendingMovies,
    loading: isTrendingMoviesLoading,
    error: trendingMoviesError,
  } = useFetch(`${MOVIE_DB_API_URL}trending/movie/day?language=en-CA`, options);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const renderMovies = (title, movieList) => {
    if (!movieList || !movieList.results.length) {
      return (
        <section>
          {toggleSearchBar && <h2 className="p-5">No Search Results Found</h2>}
        </section>
      );
    }

    return (
      <section className="py-5 z-20 w-full bg-[#262629c4] overflow-y-auto h-screen pb-40">
        <h2 className="font-bold px-5 text-xl sm:text-4xl">{title}</h2>
        {movieList.results.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}/${movie.title}`}
            onClick={handleNavLinkClick}
          >
            <article className="p-5 group hover:bg-gray-800 cursor-pointer flex gap-4">
              {movie?.poster_path ? (
                <img
                  className="rounded-lg"
                  src={`https://image.tmdb.org/t/p/w92${movie?.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  className="rounded-lg w-[90px] h-[138px]"
                  src={searchPosterFallbackImg}
                  alt="Image not found"
                />
              )}
              <div className="flex flex-col justify-evenly">
                <h3 className="text-lg font-semibold group-hover:text-red-500">
                  {movie.title}
                </h3>
                <time dateTime={movie?.release_date}>
                  {movie?.release_date}
                </time>
                <div className="flex items-center gap-1">
                  <IconContext.Provider
                    value={{ className: "text-yellow-500" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  {movie.vote_average.toFixed(1)}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    );
  };

  return (
    <section
      className={`fixed top-0 right-0 left-0 bg-[#000000dd] z-30 ${
        toggleSearchBar && "h-screen"
      }`}
    >
      <div
        className={`flex gap-5 transition-all duration-100 overflow-hidden bg-black items-center ${
          toggleSearchBar ? "h-[64px] p-3" : "h-0 opacity-0 p-0"
        }`}
      >
        <button
          onClick={handleNavLinkClick}
          className="rounded-md flex items-center justify-center w-8 h-8 bg-red-500 z-30 hover:bg-red-400"
        >
          <IconContext.Provider value={{ className: "text-white rotate-180" }}>
            <FaPlay />
          </IconContext.Provider>
        </button>
        <input
          className="p-3 w-full text-black rounded-full"
          type="search"
          placeholder="Search for movies by title"
          value={searchInput}
          onChange={handleChange}
          style={{ border: "none", outline: "none" }}
        />
      </div>
      {toggleSearchBar && !searchInput
        ? renderMovies("Trending", trendingMovies)
        : renderMovies("Search Results", movieSearchList)}
    </section>
  );
};
export default SearchBar;
