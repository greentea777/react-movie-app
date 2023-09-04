import "../index.css";
import HeroSection from "../components/HeroSection";
import ListMovieSection from "../components/ListMovieSection";

const PageHome = ({ movies, isLoading, genreList, movieList, category }) => {
  return (
    <main className="mt-[150px]">
      {!isLoading ? (
        <HeroSection movies={movies} genreList={genreList} />
      ) : (
        <p>Loading...</p>
      )}
      {!isLoading ? (
        <ListMovieSection
          movieList={movieList}
          genreList={genreList}
          category={category}
        />
      ) : (
        <p>Loading...</p>
      )}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        harum ipsa modi, temporibus quisquam reiciendis quas inventore libero
        dicta? Tempore beatae quidem amet voluptate fugiat! Repellendus omnis
        libero illo nostrum?
      </p>
    </main>
  );
};
export default PageHome;
