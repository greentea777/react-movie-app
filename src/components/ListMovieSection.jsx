import { useEffect, useState } from "react";

// import function to register Swiper custom elements
import Category from "./Category";
import useMediaQuery from "../hooks/useMediaQuery";
import ListMovieContainer from "./ListMovieContainer";

const ListMovieSection = ({ genres }) => {
  const [category, setCategory] = useState("popular");
  const isBrowser = useMediaQuery("(min-width: 640px)");

  // Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const renderListMovieContainers = (categories, genreList) => {
    return categories.map((category, index) => (
      <ListMovieContainer
        key={index}
        category={category}
        genreList={genreList}
      />
    ));
  };

  useEffect(() => {
    if (isBrowser) {
      setCategory("popular");
    }
  }, [isBrowser]);

  return (
    <section className="px-5 text-white relative top-[-150px] z-20 flex flex-col gap-10 mt-10">
      {!isBrowser && (
        <Category handleCategory={handleCategory} category={category} />
      )}

      <ListMovieContainer category={category} genreList={genres?.genres} />

      {isBrowser &&
        renderListMovieContainers(
          ["top_rated", "now_playing", "upcoming"],
          genres?.genres
        )}
    </section>
  );
};
export default ListMovieSection;
