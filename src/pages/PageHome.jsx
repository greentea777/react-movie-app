import HeroMovieCard from "../components/HeroMovieCard";
import ListMovieCard from "../components/ListMovieCard";
import { useRef, useEffect } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import "../index.css";
// register Swiper custom elements
register();
const PageHome = ({ movies, isLoading, genreList, movieList, category }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current?.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress);
      // console.log(swiper);
    });

    swiperElRef.current?.addEventListener("slidechange", (e) => {
      // console.log("slide changed");
    });
  }, []);

  const randomMovie = movies.results
    ?.slice(0, 5)
    .sort(() => Math.random() - 0.5);
  return (
    <main>
      {!isLoading ? (
        <swiper-container
          // space-between="0"
          grab-cursor="true"
          // slidesPerView="auto"
          // slides-per-view="2"
          ref={swiperElRef}
          pagination="true"
          pagination-clickable="true"
          // pagination-dynamic-bullets="true"
          loop="true"
          // autoplay-delay="2500"
          // autoplay-disable-on-interaction="false"
        >
          {randomMovie.map((movie, index) => (
            <HeroMovieCard key={index} movie={movie} genreList={genreList} />
          ))}
        </swiper-container>
      ) : (
        <p>Loading...</p>
      )}
      <section>
        <h2>{category}</h2>
        <swiper-container
          // style={{ background: "black", width: "70%" }}
          grab-cursor="true"
          slides-per-view="auto"
          space-between="10"
          // slides-per-view="auto"
        >
          {movieList.results?.map((movie, index) => (
            <ListMovieCard key={index} movie={movie} genreList={genreList} />
          ))}
        </swiper-container>
      </section>
    </main>
  );
};
export default PageHome;
