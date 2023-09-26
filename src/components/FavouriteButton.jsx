import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavourite } from "../features/favs/favsSlice";

const FavouriteButton = ({ movie }) => {
  const favouriteList = useSelector((state) => state.favs.movies);
  const isFavourite = favouriteList?.find((item) => item.id === movie?.id);

  const [isAnimating, setIsAnimating] = useState(false);

  const dispatch = useDispatch();
  return (
    <button
      className={isAnimating && isFavourite ? "animate-ping-once" : ""}
      onClick={() => {
        dispatch(addFavourite(movie));
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
