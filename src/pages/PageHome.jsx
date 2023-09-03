import HeroMovieCard from "../components/HeroMovieCard";
import { useRef, useEffect } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import "../index.css";
// register Swiper custom elements
register();
const PageHome = ({ movies, isLoading, genreList }) => {
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
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return (
    <main className="mt-[150px]">
      {!isLoading ? (
        <swiper-container
          slidesPerView="auto"
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam harum
        quasi voluptatum inventore error non suscipit dolor, facilis voluptatem
        dignissimos perspiciatis soluta vel est cupiditate tenetur voluptate
        quos quibusdam at!
      </p>
    </main>
  );
};
export default PageHome;
