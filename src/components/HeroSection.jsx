import { useRef, useEffect } from "react";
import HeroMovieCard from "./HeroMovieCard";
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa6";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import useMediaQuery from "../hooks/useMediaQuery";

const HeroSection = ({ movies, genres }) => {
  const isBrowser = useMediaQuery("(min-width: 640px)");
  const swiperElRef = useRef(null);
  useEffect(() => {
    // register Swiper custom elements
    register();
    const params = {
      // grabCursor: true,
      // pagination: {
      //   // clickable: true,
      //   type: "progressbar",
      // },
      navigation: {
        nextEl: ".custom_next",
        prevEl: ".custom_prev",
      },
      // navigation: true,
      scrollbar: {
        hide: false,
      },
      grabCursor: true,
      // on: {
      //   reachBeginning() {
      //     console.log("123");
      //   },
      //   reachEnd() {
      //     console.log("456");
      //   },
      // },
      // loop: true,
    };
    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);

  const randomMovie = movies?.results
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <section className="relative z-10">
      {/* {!isMoviesLoading ? ( */}

      <div
        className={`flex gap-3 absolute right-[2%] bottom-[32%] ${
          isBrowser ? "visible" : "invisible"
        }`}
      >
        <button className="rounded-md flex items-center justify-center custom_prev w-8 h-8 bg-red-500 z-30 disabled:opacity-50">
          <IconContext.Provider
            value={{ size: "1.2em", className: "rotate-180 text-white" }}
          >
            <FaPlay />
          </IconContext.Provider>
        </button>
        <button className="rounded-md flex items-center justify-center custom_next w-8 h-8 bg-red-500 z-30 disabled:opacity-50">
          <IconContext.Provider
            value={{ size: "1.2em", className: "text-white" }}
          >
            <FaPlay />
          </IconContext.Provider>
        </button>
      </div>

      <swiper-container init="false" ref={swiperElRef}>
        {randomMovie?.map((movie, index) => (
          <HeroMovieCard key={index} movie={movie} genres={genres} />
        ))}
      </swiper-container>
      {/* ) : (
        <p>Loading...</p>
      )} */}
    </section>
  );
};
export default HeroSection;
