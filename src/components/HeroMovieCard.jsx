const HeroMovieCard = ({ movie, genreList }) => {
  const commonGenreId = genreList?.filter((value) =>
    movie.genre_ids.includes(value.id)
  );

  //   console.log(commonValues);

  return (
    <swiper-slide>
      <div>
        {/* <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        /> */}
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
