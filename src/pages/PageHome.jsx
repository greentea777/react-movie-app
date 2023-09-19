import "../index.css";
import { useEffect } from 'react';
import HeroSection from "../components/HeroSection";
import ListMovieSection from "../components/ListMovieSection";
import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import Loading from "../components/Loading";
import { appTitle } from '../globals/globalVariables';

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

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  return (
    <main className="mt-[128px] min-[420px]:mt-[104px] sm:mt-0 flex-1">
      {!isTrendingMoviesLoading && !isGenresLoading ? (
        <HeroSection movies={trendingMovies} genres={genres} />
      ) : (
        <Loading />
      )}

      {trendingMoviesError && <p>{trendingMoviesError}</p>}
      {!isGenresLoading ? <ListMovieSection genres={genres} /> : <Loading />}
      {genresError && <p>{genresError}</p>}
    </main>
  );
};
export default PageHome;
