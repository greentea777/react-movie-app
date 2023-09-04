import { useRef, useEffect, useState } from "react";
import ListMovieCard from "./ListMovieCard";
import { IconContext } from "react-icons";
import { GoColumns } from "react-icons/go";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Category from "./Category";

const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";
const ListMovieSection = ({ genreList }) => {
  const [movieList, setMovieList] = useState([]);
  const [category, setCategory] = useState("popular");
  const [displayMethod, setDisplayMethod] = useState("col");
  const [isBrowser, setIsBrowser] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  const swiperRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0ZDUzZGYzOWI4YTIwYmFlNTcwNDg0YmFiM2NjMSIsInN1YiI6IjY0ZWUzMjY3ZTBjYTdmMDBhZTM4MGFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUCQ6FTPC4_DjGiswyCvLGlWbeHWSe42IxwHAdl9m_k",
    },
  };

  const fetchMovieList = (category) => {
    fetch(
      `${MOVIE_DB_API_URL}/movie/${category}?language=en-US&page=1&region=CA`,
      options
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieList(category);
  }, [category]);

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
    console.log(e.target.value);
  };

  const toggleDisplayMethod = () => {
    if (displayMethod === "col") {
      setDisplayMethod("row");
    } else if (displayMethod === "row") {
      setDisplayMethod("col");
    }
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setIsBrowser(true);
    } else {
      setIsBrowser(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 640px)");
    mediaQuery.addEventListener("change", isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", isDesktop);
  }, []);

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
            <GoColumns />
          </IconContext.Provider>
        </button>
      </div>
      {!isBrowser && <Category handleCategory={handleCategory} />}
      {/* <Category handleCategory={handleCategory} /> */}
      {displayMethod === "col" ? (
        <swiper-container init="false" ref={swiperRef} mousewheel={true}>
          {movieList.results?.map((movie, index) => (
            <swiper-slide key={index} style={{ width: "80%" }}>
              <ListMovieCard movie={movie} genreList={genreList} />{" "}
            </swiper-slide>
          ))}
        </swiper-container>
      ) : (
        <section className="min-[420px]:grid min-[420px]:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {movieList.results?.map((movie, index) => (
            <ListMovieCard key={index} movie={movie} genreList={genreList} />
          ))}
        </section>
      )}
    </section>
  );
};
export default ListMovieSection;
