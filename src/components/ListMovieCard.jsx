import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import CircularRatingProgressbar from "./CircularRatingProgressbar";
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

const ListMovieCard = ({ movie, genreList }) => {
  const commonGenreId = genreList?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  const { data: singleMovie } = useFetch(`
  ${MOVIE_DB_API_URL}movie/${movie?.id}/images?include_image_language=en
  `, options);

  const progressBarClass = "absolute top-2 right-2";

  return (
    <article className="rounded-2xl relative h-72">
      {/* <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        /> */}
      {/* <picture className="mx-auto w-fit relative">
          <source
            srcSet={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            media="(max-width: 600px)"
          />
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
        </picture> */}
      <div className="relative">
        {/* fallback if not img */}
        {movie.backdrop_path ? (
          <Link to={`/movie/${movie.id}/${movie.title}`}>
            <img
              //   style={{ width: "150px" }}
              className="rounded-2xl"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </Link>
        ) : (
          <p>images not found</p>
        )}

        {singleMovie?.logos[0]?.file_path ? (
          <img
            className="absolute bottom-[10%] left-2/4 translate-x-[-50%]"
            src={`https://image.tmdb.org/t/p/w154${singleMovie?.logos[0]?.file_path}`}
            alt={movie.title} />
        )
          : <h2 className="absolute bottom-[10%] left-2/4 translate-x-[-50%]">{movie.title}</h2>}

        <CircularRatingProgressbar progressBarClass={progressBarClass} rating={movie.vote_average} />
      </div>

      <div className="absolute z-100 flex gap-1.5 left-0 right-0 flex-col leading-tight p-2 rounded-b-2xl">
        <div className="flex justify-between">
          <h3 className="font-bold">{movie.title}</h3>
          <FavouriteButton movie={movie} />
        </div>
        <div className="flex justify-between">
          {commonGenreId?.slice(0, 1).map((item, index, array) => (
            <p key={index}>
              {item.name}
              {index === array.length - 1 ? "" : " •"}
            </p>
          ))}
          <p>{movie.release_date}</p>
        </div>
      </div>
    </article>
  );
};
export default ListMovieCard;
