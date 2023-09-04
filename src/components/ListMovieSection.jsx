import { useRef, useEffect, useState } from "react";
import ListMovieCard from "./ListMovieCard";
import { IconContext } from "react-icons";
import { GoColumns, GoRows } from "react-icons/go";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

const ListMovieSection = ({ movieList, category, genreList }) => {
  const [displayMethod, setDisplayMethod] = useState("col");
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      // register Swiper custom elements
      register();
      const params = {
        grabCursor: true,
        mousewheel: true,
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

  const toggleDisplayMethod = () => {
    if (displayMethod === "col") {
      setDisplayMethod("row");
    } else if (displayMethod === "row") {
      setDisplayMethod("col");
    }
  };

  return (
    <section>
      <div className="flex justify-between">
        <h2>{category}</h2>
        {displayMethod === "col" ? (
          <button onClick={toggleDisplayMethod}>
            <IconContext.Provider
              value={{ size: "1.5em", className: "global-class-name" }}
            >
              <GoColumns />
            </IconContext.Provider>
          </button>
        ) : (
          <button onClick={toggleDisplayMethod}>
            <IconContext.Provider
              value={{ size: "1.5em", className: "global-class-name" }}
            >
              <GoRows />
            </IconContext.Provider>
          </button>
        )}
      </div>
      {displayMethod === "col" ? (
        <swiper-container init="false" ref={swiperRef} mousewheel={true}>
          {movieList.results?.map((movie, index) => (
            <ListMovieCard key={index} movie={movie} genreList={genreList} />
          ))}
        </swiper-container>
      ) : (
        movieList.results?.map((movie, index) => (
          <ListMovieCard key={index} movie={movie} genreList={genreList} />
        ))
      )}
    </section>
  );
};
export default ListMovieSection;
