import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useMediaQuery from "../hooks/useMediaQuery";
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
  const isBrowser = useMediaQuery("(min-width: 640px)");

  const {
    data: singleMovie,
    loading: singleMovieLoading,
    error: singleMovieError,
  } = useFetch(
    `${MOVIE_DB_API_URL}/movie/${id}?append_to_response=videos%2Crelease_dates%2Ccredits&language=en-US`,
    options
  );

  id = id * 1;

  const officalTrailer = singleMovie?.videos?.results?.find(
    (video) =>
      video.type?.toLowerCase() === "trailer" &&
      // if not found offical fallback to false
      (video.official || !video.official)
  );
  const releaseDateCA = singleMovie?.release_dates?.results?.find(
    (date) => date.iso_3166_1 === "CA"
  );

  // .release_dates[0]?.release_date.slice(0, 10);

  const movieRuntimeByMinutes = singleMovie?.runtime;
  const hour = Math.floor(movieRuntimeByMinutes / 60);
  const remainingMinutes = movieRuntimeByMinutes % 60;

  return (
    <section className="mt-20 mb-20">
      {!singleMovieLoading ? (
        <div className="flex flex-col max-w-5xl mx-auto px-5 sm:flex-row">
          {singleMovie?.poster_path && (
            <img
              className="m-auto"
              src={`https://image.tmdb.org/t/p/w300${singleMovie?.poster_path}`}
              alt={singleMovie?.title}
            />
          )}

          <article className="py-5 max-w-[300px] mx-auto sm:px-10 sm:max-w-none">
            <div className="flex justify-between">
              <h1 className="text-4xl">{singleMovie?.title}</h1>
              <FavouriteButton movie={singleMovie} />
            </div>

            {/* If no release date in CA , show message */}
            {releaseDateCA ? (
              <p className="mt-2">
                <time
                  dateTime={releaseDateCA.release_dates[0]?.release_date.slice(
                    0,
                    10
                  )}
                >
                  {`${
                    releaseDateCA.iso_3166_1
                  } - ${releaseDateCA.release_dates[0]?.release_date.slice(
                    0,
                    10
                  )}`}
                </time>
              </p>
            ) : (
              <p>No release date found for CA</p>
            )}

            <p className="mt-2">
              {singleMovie?.genres.map((genre, index, genresArray) => (
                <span key={index}>
                  {genre.name}
                  {index === genresArray.length - 1 ? "" : " • "}
                </span>
              ))}
            </p>

            {/* <time dateTime={releaseDateCA}>{releaseDateCA}</time> */}
            <p className="mt-2">
              <time
                dateTime={`PT${hour}H${remainingMinutes}M`}
              >{`${hour}h ${remainingMinutes}m`}</time>
            </p>

            {singleMovie?.tagline && (
              <p className="mt-2">{singleMovie?.tagline}</p>
            )}

            <p className="mt-2">{singleMovie?.overview}</p>
          </article>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {officalTrailer &&
        (isBrowser ? (
          <div className="max-w-5xl mx-auto mt-5">
            <div className="relative w-full pt-[56.25%] overflow-hidden">
              <iframe
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full px-5"
                allowFullScreen
                src={`https://www.youtube.com/embed/${officalTrailer.key}`}
              ></iframe>
            </div>
          </div>
        ) : (
          <button className="flex justify-center mt-2 mx-auto hover:text-white hover:bg-black p-3 border-solid border-2 border-black ">
            <a
              href={`https://www.youtube.com/watch?v=${officalTrailer.key}`}
              target="_blank"
            >
              Watch Trailer!
            </a>
          </button>
        ))}
    </section>
  );
};
export default PageSingleMovie;
