import { createContext, useEffect, useReducer } from "react";
export const FavouriteListContext = createContext(null);
export const FavouriteDispatchContext = createContext(null);

const initialState = JSON.parse(localStorage.getItem("favourite")) || [];

export const FavouriteProvider = ({ children }) => {
  const [favouriteList, dispatch] = useReducer(
    favouriteListReducer,
    initialState
  );

  useEffect(() => {
    // when favourite list updates, store to local storage
    localStorage.setItem("favourite", JSON.stringify(favouriteList));
  }, [favouriteList]);

  return (
    <FavouriteListContext.Provider value={favouriteList}>
      <FavouriteDispatchContext.Provider value={dispatch}>
        {children}
      </FavouriteDispatchContext.Provider>
    </FavouriteListContext.Provider>
  );
};

function favouriteListReducer(favouriteList, action) {
  switch (action.type) {
    case "toggle": {
      const updatedList = [...favouriteList];
      const index = updatedList.findIndex(
        (favourite) => favourite.id === action.id
      );

      if (index !== -1) {
        updatedList[index] = {
          ...updatedList[index],
          isFavourited: !updatedList[index].isFavourited,
        };
        // if isFavourited toggles to false, remove from the list
        if (!updatedList[index].isFavourited) {
          updatedList.splice(index, 1);
        }
      } else {
        // if the movie is not in the list, add it in the list and set isFavourited to true
        updatedList.push({
          id: action.id,
          movie: action.movie,
          isFavourited: true,
        });
      }
      return updatedList;
    }

    default: {
      return favouriteList;
    }
  }
}
