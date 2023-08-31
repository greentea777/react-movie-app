import HeroMovieCard from "../components/HeroMovieCard";

const PageHome = ({ movies, isLoading, genreList }) => {
  console.log(movies);
  // const randomMovie = movies.results?.slice(0, 5);
  return (
    <main>
      {!isLoading ? (
        movies.results
          .slice(0, 5)
          .map((movie, index) => (
            <HeroMovieCard key={index} movie={movie} genreList={genreList} />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
export default PageHome;
