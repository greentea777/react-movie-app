import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import { useState, useRef, useEffect } from "react";
import { IconContext } from "react-icons";
import { HiViewColumns } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa6";

import { register } from "swiper/element/bundle";
import ListMovieCard from "./ListMovieCard";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { convertCategory } from "../utilities/utilities";

const ListMovieContainer = ({ category, genreList }) => {
  const [displayMethod, setDisplayMethod] = useState("col");
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      // register Swiper custom elements
      register();
      const params = {
        pagination: {
          type: "progressbar",
        },
        navigation: {
          nextEl: `.custom_${category}_list_next`,
          prevEl: `.custom_${category}_list_prev`,
        },

        spaceBetween: 20,
        breakpoints: {
          500: {
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

  const {
    data: movieList,
    loading: isMovieListLoading,
    error: movieListError,
  } = useFetch(
    `${MOVIE_DB_API_URL}movie/${category}?language=en-CA&page=1&region=CA`,
    options
  );

  const toggleDisplayMethod = () => {
    setDisplayMethod(displayMethod === "col" ? "row" : "col");
  };

  return (
    <section>
      <div className="flex justify-between items-center py-3 max-w-6xl mx-auto z-10">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl sm:text-4xl uppercase">
            {convertCategory(category)}
          </h2>
          <Link to={`/movie/${category}`}>
            <span className="rounded-md flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-red-500 z-30 hover:bg-red-400">
              <IconContext.Provider value={{ className: "text-white" }}>
                <FaPlay />
              </IconContext.Provider>
            </span>
          </Link>
        </div>

        <button
          onClick={toggleDisplayMethod}
          className={`transition-all duration-300 ease-in-out ${
            displayMethod === "col" ? "rotate-0" : "rotate-90"
          }`}
        >
          <IconContext.Provider
            value={{ size: "2em", className: "global-class-name" }}
          >
            <HiViewColumns />
          </IconContext.Provider>
        </button>
      </div>

      {displayMethod === "col" ? (
        <div className="max-w-6xl mx-auto flex gap-3 overflow-y-hidden overflow-x-hidden">
          <swiper-container init="false" ref={swiperRef} class="w-[95%]">
            {movieList?.results?.map((movie, index) => (
              <swiper-slide key={index} class="">
                <ListMovieCard movie={movie} genreList={genreList} />
              </swiper-slide>
            ))}
          </swiper-container>
          <div className={`flex gap-3 invisible sm:visible flex-col`}>
            <button
              className={`custom_${category}_list_prev rounded-md flex items-center w-full justify-center h-3/6 bg-red-500 z-30 disabled:opacity-50 p-1`}
            >
              <IconContext.Provider
                value={{ size: "1.2em", className: "rotate-180" }}
              >
                <FaPlay />
              </IconContext.Provider>
            </button>
            <button
              className={`custom_${category}_list_next rounded-md flex items-center w-full justify-center custom_list_next h-3/6 bg-red-500 z-30 disabled:opacity-50 p-1`}
            >
              <IconContext.Provider
                value={{ size: "1.2em", className: "global-class-name" }}
              >
                <FaPlay />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      ) : (
        <section className="min-[420px]:grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto justify-items-center">
          {!isMovieListLoading ? (
            movieList?.results?.map((movie, index) => (
              <ListMovieCard key={index} movie={movie} genreList={genreList} />
            ))
          ) : (
            <Loading />
          )}
        </section>
      )}
    </section>
  );
};
export default ListMovieContainer;
