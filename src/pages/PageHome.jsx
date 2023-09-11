import "../index.css";
import HeroSection from "../components/HeroSection";
import ListMovieSection from "../components/ListMovieSection";
import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";

const PageHome = () => {
  const {
    data: movies,
    loading: isMoviesLoading,
    error: moviesError,
  } = useFetch(`${MOVIE_DB_API_URL}trending/movie/day?language=en-US`, options);

  const {
    data: genres,
    loading: isGenresLoading,
    error: genresError,
  } = useFetch(`${MOVIE_DB_API_URL}genre/movie/list?language=en`, options);
  return (
    <main className="mt-[144px] min-[420px]:mt-[104px] sm:mt-[64px] pb-20">
      {!isMoviesLoading && !isGenresLoading ? (
        <HeroSection movies={movies} genres={genres} />
      ) : (
        <p>Loading...</p>
      )}

      {moviesError && <p>{moviesError}</p>}
      {!isGenresLoading ? (
        <ListMovieSection genres={genres} />
      ) : (
        <p>Loading...</p>
      )}
      {genresError && <p>{genresError}</p>}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
    </main>
  );
};
export default PageHome;
