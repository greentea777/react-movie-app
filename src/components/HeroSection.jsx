import { useRef, useEffect } from "react";
import HeroMovieCard from "./HeroMovieCard";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

const HeroSection = ({ movies, genreList }) => {
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

  const randomMovie = movies.results
    ?.slice(0, 5)
    .sort(() => Math.random() - 0.5);

  return (
    <section>
      <swiper-container init="false" ref={swiperElRef}>
        {randomMovie.map((movie, index) => (
          <HeroMovieCard key={index} movie={movie} genreList={genreList} />
        ))}
      </swiper-container>
    </section>
  );
};
export default HeroSection;
