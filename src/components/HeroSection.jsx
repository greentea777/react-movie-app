import { useRef, useEffect } from "react";
import HeroMovieCard from "./HeroMovieCard";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
register();
const HeroSection = ({ movies, genres }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // register Swiper custom elements
    register();
    const params = {
      // grabCursor: true,
      pagination: {
        clickable: true,
      },
      loop: true,
    };
    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);
  const randomMovie = movies?.results
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <section>
      {/* {!isMoviesLoading ? ( */}
      <swiper-container ref={swiperElRef}>
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
