import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FavouriteButton from "../components/FavouriteButton";

const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0ZDUzZGYzOWI4YTIwYmFlNTcwNDg0YmFiM2NjMSIsInN1YiI6IjY0ZWUzMjY3ZTBjYTdmMDBhZTM4MGFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUCQ6FTPC4_DjGiswyCvLGlWbeHWSe42IxwHAdl9m_k",
  },
};

const PageSingleMovie = () => {
  let { id } = useParams();

  const {
    data: singleMovie,
    loading: singleMovieLoading,
    error: singleMovieError,
  } = useFetch(
    `${MOVIE_DB_API_URL}/movie/${id}?append_to_response=videos%2Crelease_dates%2Ccredits&language=en-US`,
    options
  );

  id = id * 1;

  const officalTrailerKey = singleMovie?.videos?.results?.find(
    (video) => video.type?.toLowerCase() === "trailer" && video.official
  ).key;
  const releaseDateCA = singleMovie?.release_dates?.results
    ?.find((date) => date.iso_3166_1 === "CA")
    .release_dates[0]?.release_date.slice(0, 10);

  const movieRuntimeByMinutes = singleMovie?.runtime;
  const hour = Math.floor(movieRuntimeByMinutes / 60);
  const remainingMinutes = movieRuntimeByMinutes % 60;

  return (
    <section className="mt-20">
      {officalTrailerKey && (
        <iframe
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${officalTrailerKey}`}
        ></iframe>
      )}
      {!singleMovieLoading ? (
        <article>
          {singleMovie?.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`}
              alt={singleMovie?.original_title}
            />
          )}
          <h2>{singleMovie?.original_title}</h2>
          <time dateTime={releaseDateCA}>{releaseDateCA}</time>
          <time
            dateTime={`PT${hour}H${remainingMinutes}M`}
          >{`${hour}h ${remainingMinutes}m`}</time>
          {singleMovie?.tagline && <p>{singleMovie?.tagline}</p>}
          {singleMovie?.genres.map((genre, index) => (
            <span key={index}>{genre.name}</span>
          ))}
          <p>{singleMovie?.overview}</p>
        </article>
      ) : (
        <p>Loading...</p>
      )}

      <FavouriteButton movie={singleMovie} />
    </section>
  );
};
export default PageSingleMovie;
