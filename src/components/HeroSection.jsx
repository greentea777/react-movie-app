import { useRef, useEffect } from "react";
import HeroMovieCard from "./HeroMovieCard";
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa6";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

const HeroSection = ({ movies, genres }) => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    // register Swiper custom elements
    register();
    const params = {
      navigation: {
        nextEl: ".custom_next",
        prevEl: ".custom_prev",
      },
      scrollbar: {
        hide: false,
      },
      grabCursor: true,
    };
    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);

  const randomMovie = movies?.results
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <section className="relative z-10">
      <div
        className={`flex gap-3 absolute right-[2%] bottom-[32%] invisible sm:visible`}
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
    </section>
  );
};
export default HeroSection;
