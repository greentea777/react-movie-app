import { useRef, useEffect, useState } from "react";
import ListMovieCard from "./ListMovieCard";
import { IconContext } from "react-icons";
import { HiViewColumns } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa6";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Category from "./Category";
import useMediaQuery from "../hooks/useMediaQuery";
import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";

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
    `${MOVIE_DB_API_URL}movie/${category}?language=en-CA&page=1&region=CA`,
    options
  );

  useEffect(() => {
    if (swiperRef.current) {
      // register Swiper custom elements
      register();
      const params = {
        // grabCursor: true,
        pagination: {
          type: "progressbar",
          // el: ".swiper-custom-pagination",
          // renderProgressbar: function (progressbarFillClass) {
          //   return (
          //     '<span class="' + progressbarFillClass + ' bottom-9 ">123</span>'
          //   );
          // },
        },
        // mousewheel: true,
        // loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".custom_list_next",
          prevEl: ".custom_list_prev",
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

  // Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const toggleDisplayMethod = () => {
    setDisplayMethod(displayMethod === "col" ? "row" : "col");
  };

  const convertCategory = (categoryInput) => {
    const categoryMap = {
      popular: "Popular",
      top_rated: "Top Rated",
      now_playing: "Now Playing",
      upcoming: "Upcoming",
    };

    return categoryMap[categoryInput].toUpperCase() || "Unknown";
  };

  return (
    <section className="px-5 text-white relative top-[-150px] z-20 backdrop-blur-lg">
      <div className="flex justify-between items-center py-3 max-w-6xl mx-auto z-10">
        <h2 className="font-bold text-xl sm:text-4xl">
          {convertCategory(category)}
        </h2>
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
      {!isBrowser && (
        <Category handleCategory={handleCategory} category={category} />
      )}

      {movieListError && <p>{movieListError}</p>}

      {displayMethod === "col" ? (
        <div className="max-w-6xl mx-auto">
          <swiper-container init="false" ref={swiperRef}>
            {!isMovieListLoading ? (
              movieList?.results?.map((movie, index) => (
                <swiper-slide key={index} class="">
                  <ListMovieCard movie={movie} genreList={genres?.genres} />
                </swiper-slide>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </swiper-container>

          <div
            className={`flex mt-2 gap-3 ${isBrowser ? "visible" : "invisible"}`}
          >
            <button className="rounded-md flex items-center w-full justify-center custom_list_prev h-3/6 bg-red-500 z-30 disabled:opacity-50 p-1">
              <IconContext.Provider
                value={{ size: "1.2em", className: "rotate-180" }}
              >
                <FaPlay />
              </IconContext.Provider>
            </button>
            <button className="rounded-md flex items-center w-full justify-center custom_list_next h-3/6 bg-red-500 z-30 disabled:opacity-50 p-1">
              <IconContext.Provider
                value={{ size: "1.2em", className: "global-class-name" }}
              >
                <FaPlay />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      ) : (
        <section className="min-[420px]:grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 px-5 max-w-6xl mx-auto justify-items-center">
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
