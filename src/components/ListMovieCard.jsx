import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import CircularRatingProgressbar from "./CircularRatingProgressbar";
import useFetch from "../hooks/useFetch";

import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import Loading from "./Loading";
import singleMovieBackDropFallback from "../assets/images/780x440.svg";

const ListMovieCard = ({ movie, genreList }) => {
  const commonGenreId = genreList?.filter((value) =>
    movie.genre_ids?.includes(value.id)
  );

  const { data: singleMovie, loading: singleMovieLoading } = useFetch(
    `
  ${MOVIE_DB_API_URL}movie/${movie?.id}/images?include_image_language=en
  `,
    options
  );

  const progressBarClass = "absolute top-2 right-2";

  return (
    <>
      {!singleMovieLoading ? (
        <article className="rounded-2xl relative w-full flex flex-col items-stretch">
          <Link to={`/movie/${movie.id}/${movie.title}`}>
            <div className="relative">
              {/* fallback if not img */}
              {movie.backdrop_path ? (
                <img
                  className="rounded-2xl"
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  className="rounded-2xl w-full"
                  src={singleMovieBackDropFallback}
                  alt="Image not found"
                />
              )}

              {singleMovie?.logos[0]?.file_path && (
                <img
                  className="absolute bottom-[10%] left-2/4 translate-x-[-50%] z-0 w-4/12	"
                  src={`https://image.tmdb.org/t/p/w154${singleMovie?.logos[0]?.file_path}`}
                  alt={movie.title}
                />
              )}

              <CircularRatingProgressbar
                progressBarClass={progressBarClass}
                rating={movie.vote_average}
              />
            </div>
          </Link>

          <div className="z-20 flex gap-3 flex-col leading-tight p-2 rounded-b-2xl">
            <div className="flex justify-between text-white">
              <Link to={`/movie/${movie.id}/${movie.title}`}>
                <h3 className="font-bold">{movie.title}</h3>
              </Link>
              <FavouriteButton movie={movie} />
            </div>
            <div className="flex justify-between text-gray-400">
              {commonGenreId?.slice(0, 1).map((item, index, array) => (
                <p key={index}>
                  {item.name}
                  {index === array.length - 1 ? "" : " •"}
                </p>
              ))}
              <p className="text-gray-400">{movie.release_date}</p>
            </div>
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default ListMovieCard;
