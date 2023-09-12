import "../index.css";
import HeroSection from "../components/HeroSection";
import ListMovieSection from "../components/ListMovieSection";
import useFetch from "../hooks/useFetch";

const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0ZDUzZGYzOWI4YTIwYmFlNTcwNDg0YmFiM2NjMSIsInN1YiI6IjY0ZWUzMjY3ZTBjYTdmMDBhZTM4MGFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUCQ6FTPC4_DjGiswyCvLGlWbeHWSe42IxwHAdl9m_k",
  },
};
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
    </main>
  );
};
export default PageHome;
