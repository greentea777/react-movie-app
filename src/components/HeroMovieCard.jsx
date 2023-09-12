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

const HeroMovieCard = ({ movie, genres }) => {
  const commonGenreId = genres?.genres?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  const { data: singleMovie } = useFetch(`
  ${MOVIE_DB_API_URL}movie/${movie?.id}/images?include_image_language=en
  `, options);

  return (
    <swiper-slide>
      <div>
        {/* fallback if not img */}
        {movie.poster_path || movie.backdrop_path ? (
          <picture className="mx-auto w-fit relative before:from-black before:bg-gradient-to-t before:w-full before:h-full before:absolute before:from-10%">
            <source
              srcSet={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              media="(max-width: 600px)"
            />
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </picture>
        ) : (
          <p>image not found</p>
        )}

        {singleMovie?.logos[0]?.file_path ? (
          <img
            className="absolute bottom-[10%] left-2/4 translate-x-[-50%]"
            src={`https://image.tmdb.org/t/p/w500${singleMovie?.logos[0]?.file_path}`}
            alt={movie.title} />
        )
          : <h2 className="absolute bottom-[10%] left-2/4 translate-x-[-50%] text-white">{movie.title}</h2>}

        <div className="absolute z-100 bottom-8 text-white flex gap-1.5 justify-center left-0 right-0">
          {commonGenreId?.slice(0, 3).map((item, index, array) => (
            <p key={index}>
              {item.name}
              {index === array.length - 1 ? "" : " •"}
            </p>
          ))}
        </div>
      </div>
    </swiper-slide>
  );
};
export default HeroMovieCard;
