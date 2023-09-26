import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import ListMovieCard from "../components/ListMovieCard";
import { appTitle } from "../globals/globalVariables";

const PageFavourite = () => {
  const favouriteList = useSelector((state) => state.favs.movies);

  const {
    data: genres,
    loading: isGenresLoading,
    error: genresError,
  } = useFetch(`${MOVIE_DB_API_URL}genre/movie/list?language=en`, options);
  const genreList = genres?.genres;

  useEffect(() => {
    document.title = `${appTitle} - Favourite`;
  }, []);

  return (
    <main className="flex-1">
      <section className="max-w-6xl mx-auto mt-16 p-5 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-3 text-white uppercase">
          Favourite{`${favouriteList.length > 1 ? "s" : ""}`}
          <span className="text-red-500">{` (${favouriteList.length})`}</span>
        </h1>
        {favouriteList.length > 0 ? (
          <section className="min-[420px]:grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-3 pb-10">
            {favouriteList.map((movie, index) => (
              <ListMovieCard key={index} movie={movie} genreList={genreList} />
            ))}
          </section>
        ) : (
          <section className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-3 text-white">
              No favourite movies yet.
            </h1>
          </section>
        )}
      </section>
    </main>
  );
};
export default PageFavourite;
