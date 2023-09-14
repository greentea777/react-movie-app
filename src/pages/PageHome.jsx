import "../index.css";
import HeroSection from "../components/HeroSection";
import ListMovieSection from "../components/ListMovieSection";
import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";

const PageHome = () => {
  const {
    data: trendingMovies,
    loading: isTrendingMoviesLoading,
    error: trendingMoviesError,
  } = useFetch(`${MOVIE_DB_API_URL}trending/movie/day?language=en-US`, options);

  const {
    data: genres,
    loading: isGenresLoading,
    error: genresError,
  } = useFetch(`${MOVIE_DB_API_URL}genre/movie/list?language=en`, options);
  return (
    <main className="mt-[144px] min-[420px]:mt-[104px] sm:mt-0 pb-15">
      {!isTrendingMoviesLoading && !isGenresLoading ? (
        <HeroSection movies={trendingMovies} genres={genres} />
      ) : (
        <p>Loading...</p>
      )}

      {trendingMoviesError && <p>{trendingMoviesError}</p>}
      {!isGenresLoading ? (
        <ListMovieSection genres={genres} />
      ) : (
        <p>Loading...</p>
      )}
      {genresError && <p>{genresError}</p>}
    </main>
  );
};
export default PageHome;
