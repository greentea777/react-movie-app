import useFetch from "../hooks/useFetch";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import HeroPosterFallback from "../assets/images/780x1170.svg";
import HeroBackdropFallback from "../assets/images/3370x2680.svg";

const HeroMovieCard = ({ movie, genres }) => {
  const commonGenreId = genres?.genres?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  const { data: singleMovieDetails } = useFetch(
    `${MOVIE_DB_API_URL}/movie/${movie.id}?append_to_response=videos%2Crelease_dates%2Ccredits&language=en-CA`,
    options
  );
  const movieRating = singleMovieDetails?.vote_average.toFixed(1);
  const releaseDateCA = singleMovieDetails?.release_dates?.results?.find(
    (date) => date.iso_3166_1 === "CA"
  );
  const movieRuntimeByMinutes = singleMovieDetails?.runtime;
  const hour = Math.floor(movieRuntimeByMinutes / 60);
  const remainingMinutes = movieRuntimeByMinutes % 60;

  return (
    <swiper-slide>
      <div>
        {/* fallback if not img */}
        {movie.poster_path || movie.backdrop_path ? (
          <picture className="before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-gray-950 after:w-full after:h-[200px] after:absolute after:bottom-0 after:bg-gradient-to-t after:from-[#262629] after:from-10%">
            <source
              srcSet={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              media="(max-width: 600px)"
            />
            <img
              className="w-full object-cover xl:object-top h-[70vh] sm:h-screen"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </picture>
        ) : (
          <picture className="before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-gray-950 after:w-full after:h-[200px] after:absolute after:bottom-0 after:bg-gradient-to-t after:from-[#262629] after:from-10%">
            <source srcSet={HeroPosterFallback} media="(max-width: 600px)" />
            <img
              className="w-full object-cover xl:object-top h-[70vh] sm:h-screen"
              src={HeroBackdropFallback}
              alt="Image not found"
            />
          </picture>
        )}

        <article className="flex flex-col absolute bottom-[27%] text-white sm:gap-1.5 justify-center left-0 right-0 p-5">
          <h1 className="font-bold text-xl sm:text-4xl">
            {singleMovieDetails?.title.toUpperCase()}
          </h1>
          <section className="flex flex-col sm:flex-row sm:gap-3">
            <ul className="flex gap-3 text-gray-400">
              <li className="flex items-center gap-1">
                <span className="sr-only">Rating:</span>
                <IconContext.Provider value={{ className: "text-yellow-500" }}>
                  <FaStar />
                </IconContext.Provider>
                {movieRating}
              </li>
              <li>
                <span className="sr-only">Release Date:</span>
                {releaseDateCA ? (
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
                ) : (
                  <time dateTime={singleMovieDetails?.release_date}>
                    {singleMovieDetails?.release_date}
                  </time>
                )}
              </li>
              <li>
                <span className="sr-only">Runtime:</span>
                <time
                  dateTime={`PT${hour}H${remainingMinutes}M`}
                >{`${hour}h ${remainingMinutes}m`}</time>
              </li>
            </ul>
            <div className="flex gap-3 text-gray-400">
              <span className="sr-only">Genres:</span>
              {commonGenreId?.slice(0, 3).map((item, index, array) => (
                <span key={index}>{item.name}</span>
              ))}
            </div>
          </section>
          <p className="text-gray-400">{singleMovieDetails?.tagline}</p>
          <div className="flex items-center gap-6 mt-7">
            <Link
              className="rounded-full px-8 py-2 bg-red-500 font-semibold hover:bg-red-400 cursor-pointer"
              to={`/movie/${singleMovieDetails?.id}/${singleMovieDetails?.title}`}
            >
              More Info
            </Link>
            <FavouriteButton
              className="text-white"
              movie={singleMovieDetails}
            />
          </div>
        </article>
      </div>
    </swiper-slide>
  );
};
export default HeroMovieCard;
