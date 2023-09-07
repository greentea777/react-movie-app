import { useRef, useEffect, useState } from "react";
import ListMovieCard from "./ListMovieCard";
import { IconContext } from "react-icons";
import { HiViewColumns } from "react-icons/hi2";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Category from "./Category";
import useMediaQuery from "../hooks/useMediaQuery";
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
const ListMovieSection = ({ genres }) => {
  const [category, setCategory] = useState("popular");
  const [displayMethod, setDisplayMethod] = useState("col");
  const isBrowser = useMediaQuery("(min-width: 640px)");
  const swiperRef = useRef(null);
  const {
    data: movieList,
    loading: isMovieListLoading,
    error: movieListError,
  } = useFetch(
    `${MOVIE_DB_API_URL}/movie/${category}?language=en-US&page=1&region=CA`,
    options
  );

  useEffect(() => {
    if (swiperRef.current) {
      // register Swiper custom elements
      register();
      const params = {
        grabCursor: true,
        spaceBetween: 10,
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          960: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        },
      };
      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
    }
  }, [displayMethod]);

  // Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const toggleDisplayMethod = () => {
    setDisplayMethod(displayMethod === "col" ? "row" : "col");
  };

  return (
    <section>
      <div className="flex justify-between">
        <h2>{category}</h2>
        <button
          onClick={toggleDisplayMethod}
          className={`transition-all duration-300 ease-in-out ${
            displayMethod === "col" ? "rotate-0" : "rotate-90"
          }`}
        >
          <IconContext.Provider
            value={{ size: "1.5em", className: "global-class-name" }}
          >
            <HiViewColumns />
          </IconContext.Provider>
        </button>
      </div>
      {!isBrowser && <Category handleCategory={handleCategory} />}

      {movieListError && <p>{movieListError}</p>}

      {displayMethod === "col" ? (
        <swiper-container init="false" ref={swiperRef} mousewheel={true}>
          {!isMovieListLoading ? (
            movieList?.results?.map((movie, index) => (
              <swiper-slide key={index} style={{ width: "80%" }}>
                <ListMovieCard movie={movie} genreList={genres?.genres} />{" "}
              </swiper-slide>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </swiper-container>
      ) : (
        <section className="min-[420px]:grid min-[420px]:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {!isMovieListLoading ? (
            movieList?.results?.map((movie, index) => (
              <ListMovieCard
                key={index}
                movie={movie}
                genreList={genres?.genres}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      )}
    </section>
  );
};
export default ListMovieSection;
