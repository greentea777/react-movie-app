import { useParams } from "react-router-dom";
import { convertCategory } from "../utilities/utilities";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { MOVIE_DB_API_URL, options } from "../globals/APIVariables";
import ListMovieCard from "../components/ListMovieCard";
import { appTitle } from "../globals/globalVariables";

const PageSingleCategory = () => {
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [movieData, setMovieData] = useState([]);
  let { category } = useParams();

  const {
    data: movieList,
    loading: isMovieListLoading,
    error: movieListError,
  } = useFetch(
    `${MOVIE_DB_API_URL}movie/${category}?language=en-CA&page=${page}&region=CA`,
    options
  );

  const {
    data: genres,
    loading: isGenresLoading,
    error: genresError,
  } = useFetch(`${MOVIE_DB_API_URL}genre/movie/list?language=en`, options);
  const genreList = genres?.genres;

  const handlePageIncrement = () => {
    if (page < movieList.total_pages) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.title = `${appTitle} - ${category}`;
    if (movieList?.results && page !== prevPage) {
      setMovieData((prevMovieData) => [...prevMovieData, ...movieList.results]);
      setPrevPage(page);
    }
  }, [movieList?.results]);

  return (
    <main className="flex-1 mb-20">
      <section className="max-w-6xl mx-auto mt-16 p-5 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-3 text-white uppercase">
          {convertCategory(category)}{" "}
          <span className="text-red-500"> ({movieData.length})</span>
        </h1>
        <section className="min-[420px]:grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-3 pb-10">
          {movieData?.map((movie, index) => (
            <ListMovieCard key={index} movie={movie} genreList={genreList} />
          ))}
        </section>
        <button
          className="w-full p-3 bg-red-500 rounded-xl text-white font-semibold enabled:hover:bg-red-400 cursor-pointer disabled:opacity-50"
          onClick={handlePageIncrement}
          disabled={page == movieList?.total_pages ? true : false}
        >
          View More
        </button>
      </section>
    </main>
  );
};
export default PageSingleCategory;
