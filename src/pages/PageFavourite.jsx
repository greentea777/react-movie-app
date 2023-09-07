import { useContext } from "react";
import {
  FavouriteListContext,
  FavouriteDispatchContext,
} from "../context/FavouriteContext";

const PageFavourite = () => {
  const dispatch = useContext(FavouriteDispatchContext);
  const favouriteList = useContext(FavouriteListContext);
  return (
    <main className="mt-60">
      <h2 className="text-red-300 text-3xl">Favourite Page</h2>
      {favouriteList.map((item, index) => (
        <h3 key={index}>{item.movie.title}</h3>
      ))}
    </main>
  );
};
export default PageFavourite;
