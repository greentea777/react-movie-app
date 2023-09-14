import { useContext } from "react";
import { FavouriteListContext } from "../context/FavouriteContext";

import { useSelector } from "react-redux";

const PageFavourite = () => {
  // const favouriteList = useContext(FavouriteListContext);
  const favouriteList = useSelector((state) => state.favs.movies);
  console.log(favouriteList);
  return (
    <main className="mt-60">
      <h2 className="text-red-300 text-3xl">Favourite Page</h2>
      {favouriteList.map((item, index) => (
        <h3 key={index}>{item.title}</h3>
      ))}
    </main>
  );
};
export default PageFavourite;
