import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useMediaQuery from "../hooks/useMediaQuery";
import FavouriteButton from "../components/FavouriteButton";
import CircularRatingProgressbar from "../components/CircularRatingProgressbar";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";
import { Navigate } from "react-router-dom";
import posterFallbackImg from "../assets/images/300x450.svg";
import castFallbackImg from "../assets/images/144x176.svg";

const PageSingleMovie = () => {
  let { id } = useParams();
  const isBrowser = useMediaQuery("(min-width: 640px)");

  id = id * 1;

  if (isNaN(id) || id % 1 !== 0 || id < 0) {
    return <Navigate to="/404" replace={true} />;
  }

  const {
    data: singleMovie,
    loading: singleMovieLoading,
    error: singleMovieError,
  } = useFetch(
    `${MOVIE_DB_API_URL}movie/${id}?append_to_response=videos%2Crelease_dates%2Ccredits&language=en-CA`,
    options
  );

  const cast = singleMovie?.credits?.cast?.filter(
    (cast) => cast.known_for_department === "Acting" && cast.order < 16
  );

  const officalTrailer = singleMovie?.videos?.results?.find(
    (video) =>
      video.type?.toLowerCase() === "trailer" &&
      // if not found offical fallback to false
      (video.official || !video.official)
  );
  const releaseDateCA = singleMovie?.release_dates?.results?.find(
    (date) => date.iso_3166_1 === "CA" || date.iso_3166_1 === "US"
  );

  const movieRuntimeByMinutes = singleMovie?.runtime;
  const hour = Math.floor(movieRuntimeByMinutes / 60);
  const remainingMinutes = movieRuntimeByMinutes % 60;

  useEffect(() => {
    document.title = `${appTitle} - ${singleMovie?.title}`;
  }, [singleMovie?.title]);

  return (
    <main className="flex-1">
      <section className="mt-20 mb-20">
        {!singleMovieLoading ? (
          <div className="flex flex-col max-w-6xl mx-auto px-5 sm:flex-row">
            {singleMovie?.poster_path ? (
              <img
                className="m-auto rounded-lg"
                src={`https://image.tmdb.org/t/p/w300${singleMovie?.poster_path}`}
                alt={singleMovie?.title}
              />
            ) : (
              <img
                className="m-auto w-[300px] h-[450px] rounded-lg"
                src={posterFallbackImg}
                alt={singleMovie?.title}
              />
            )}

            <article className="py-5 max-w-[300px] mx-auto sm:px-10 sm:max-w-none text-white flex flex-col gap-3">
              <div className="flex justify-between gap-5 items-center">
                <div className="flex items-center gap-5">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {singleMovie?.title}
                  </h1>
                  <FavouriteButton movie={singleMovie} />
                </div>

                <CircularRatingProgressbar rating={singleMovie?.vote_average} />
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
                <p>
                  <time dateTime={singleMovie?.release_date}>
                    {singleMovie?.release_date}
                  </time>
                </p>
              )}

              <p>
                {singleMovie?.genres.map((genre, index, genresArray) => (
                  <span key={index}>
                    {genre.name}
                    {index === genresArray.length - 1 ? "" : " • "}
                  </span>
                ))}
              </p>

              <p>
                <time
                  dateTime={`PT${hour}H${remainingMinutes}M`}
                >{`${hour}h ${remainingMinutes}m`}</time>
              </p>

              {singleMovie?.tagline && (
                <p className="text-gray-400">{singleMovie?.tagline}</p>
              )}
              <article>
                <h3 className="text-xl sm:text-3xl font-semibold">Overview</h3>
                <p className="mt-3">{singleMovie?.overview}</p>
              </article>
            </article>
          </div>
        ) : (
          <Loading />
        )}
        <section className="flex gap-3 px-5 max-w-6xl overflow-x-auto mx-auto object-[10%] my-7">
          {cast?.map((person, index) => (
            <article key={index} className="flex-[0_0_auto] text-white w-36">
              {person.profile_path ? (
                <img
                  className="rounded-xl h-44 w-36 object-cover"
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                  alt={person.name}
                />
              ) : (
                <img
                  className="rounded-xl h-44 w-36 object-cover"
                  src={castFallbackImg}
                  alt="Image not found"
                />
              )}
              <h4 className=" font-medium py-1">{person.name}</h4>
              <p className="text-gray-400 py-2">{person.character}</p>
            </article>
          ))}
        </section>

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
            <a
              className="flex justify-center w-2/4 mt-2 rounded-lg mx-auto bg-red-500 text-white font-semibold hover:bg-red-400 cursor-pointer p-3"
              href={`https://www.youtube.com/watch?v=${officalTrailer.key}`}
              target="_blank"
            >
              Watch Trailer!
            </a>
          ))}
      </section>
    </main>
  );
};
export default PageSingleMovie;
