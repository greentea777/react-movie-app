import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaChevronLeft } from "react-icons/fa";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";

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

  // useEffect(() => {
  //   if (!toggleSearchBar) {
  //     setSearchInput("");
  //   }
  // }, [toggleSearchBar]);
  const renderMovies = (title, movieList) => {
    if (!movieList || !movieList.results.length) {
      return (
        <section>{toggleSearchBar && <h2>No Search Results Found</h2>}</section>
      );
    }

    return (
      <section className="p-5 z-20 w-full bg-slate-600 overflow-y-auto h-screen pb-40">
        <h2>{title}</h2>
        {movieList.results.map((item) => (
          <Link
            key={item.id}
            to={`/movie/${item.id}/${item.title}`}
            onClick={handleNavLinkClick}
          >
            <article>
              <h3>{item.title}</h3>
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
    );
  };

  // const renderSearchResults = () => {
  //   if (!searchInput || !movieSearchList?.results.length) {
  //     return null;
  //   }

  //   return (
  //     <section className="p-5 z-20 w-full bg-slate-600 overflow-y-auto h-screen pb-40">
  //       <h2>Search Results</h2>
  //       {movieSearchList.results.map((item) => (
  //         <Link
  //           key={item.id}
  //           to={`/movie/${item.id}/${item.title}`}
  //           onClick={handleNavLinkClick}
  //         >
  //           <article>
  //             <h3>{item.title}</h3>
  //             {item?.poster_path ? (
  //               <img
  //                 src={`https://image.tmdb.org/t/p/w92${item?.poster_path}`}
  //                 alt={item.title}
  //               />
  //             ) : (
  //               <p>No movie poster found</p>
  //             )}
  //           </article>
  //         </Link>
  //       ))}
  //     </section>
  //   );
  // };

  return (
    <section
      className={`fixed top-0 right-0 left-0 bg-black z-30 ${
        toggleSearchBar && "h-screen"
      }`}
    >
      <div
        className={`flex gap-5 transition-all duration-100 overflow-hidden ${
          toggleSearchBar ? "h-[64px] p-3" : "h-0 opacity-0 p-0"
        }`}
        // className={`flex mx-auto overflow-hidden ${
        //   toggleSearchBar ? "p-3" : "p-0"
        // }`}
      >
        <button onClick={handleNavLinkClick}>
          <IconContext.Provider
            value={{
              size: "1.5em",
              className: "hover:text-red-500 text-white",
            }}
          >
            <FaChevronLeft />
          </IconContext.Provider>
        </button>
        <input
          className="p-3 w-full text-black rounded-full"
          // className={`transition-all duration-100 w-full overflow-hidden text-black ${
          //   toggleSearchBar ? "h-[40px] p-2" : "h-0 opacity-0 p-0"
          // }`}

          type="search"
          placeholder="Search for movies by title"
          value={searchInput}
          onChange={handleChange}
          style={{ border: "none", outline: "none" }}
        />
      </div>
      {/* {toggleSearchBar && !searchInput
        ? renderTrendingMovies()
        : renderSearchResults()} */}
      {/* {renderSearchResults()} */}
      {toggleSearchBar && !searchInput
        ? renderMovies("Trending", trendingMovies)
        : renderMovies("Search Results", movieSearchList)}
    </section>
  );
};
export default SearchBar;
