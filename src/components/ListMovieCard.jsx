import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListMovieCard = ({ movie, genreList }) => {
  const commonGenreId = genreList?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  return (
    <section className="rounded-2xl relative h-72">
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

      <div className="absolute z-100 flex gap-1.5 left-0 right-0 flex-col leading-tight p-2 rounded-b-2xl">
        <div className="flex justify-between">
          <h3 className="font-bold">{movie.title}</h3>
          <IconContext.Provider
            value={{ size: "1.5em", className: "global-class-name" }}
          >
            <FaHeart />
          </IconContext.Provider>
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
    </section>
  );
};
export default ListMovieCard;
