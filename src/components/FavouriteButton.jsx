import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useContext } from "react";
import {
  FavouriteListContext,
  FavouriteDispatchContext,
} from "../context/FavouriteContext";

const FavouriteButton = ({ movie }) => {
  const dispatch = useContext(FavouriteDispatchContext);
  const favouriteList = useContext(FavouriteListContext);
  return (
    <button
      onClick={() => {
        dispatch({
          type: "toggle",
          id: movie.id,
          movie: movie,
        });
      }}
    >
      <IconContext.Provider
        value={{ size: "1.5em", className: "global-class-name" }}
      >
        {favouriteList?.find((item) => item.id === movie?.id) ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </IconContext.Provider>
    </button>
  );
};
export default FavouriteButton;
