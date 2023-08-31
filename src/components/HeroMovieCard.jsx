const HeroMovieCard = ({ movie, genreList }) => {
  const commonGenreId = genreList?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  //   console.log(commonValues);

  return (
    <>
      {/* <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          media="(max-width: 600px)"
        />
        <img
          className="w-10/12 mx-auto"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      </picture> */}
      <img
        className="w-10/12 mx-auto"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />

      {commonGenreId?.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
      <button>123</button>
      <button>123</button>
    </>
  );
};
export default HeroMovieCard;
