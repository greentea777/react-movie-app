import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useContext, useState } from "react";
import {
  FavouriteListContext,
  FavouriteDispatchContext,
} from "../context/FavouriteContext";

const FavouriteButton = ({ movie }) => {
  const dispatch = useContext(FavouriteDispatchContext);
  const favouriteList = useContext(FavouriteListContext);
  const isFavourite = favouriteList?.find((item) => item.id === movie?.id);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <button
      className={isAnimating && isFavourite ? "animate-ping-once" : ""}
      onClick={() => {
        dispatch({
          type: "toggle",
          id: movie.id,
          movie: movie,
        });
        setIsAnimating(true);
      }}
    >
      <IconContext.Provider
        value={{ size: "1.5em", color: "red", className: "global-class-name" }}
      >
        {isFavourite ? <FaHeart /> : <FaRegHeart />}
      </IconContext.Provider>
    </button>
  );
};
export default FavouriteButton;
