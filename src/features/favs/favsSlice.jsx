import { createSlice } from "@reduxjs/toolkit";

function getFavouriteList() {
  let favListFromStorage = localStorage.getItem("favourites");
  if (favListFromStorage === null) {
    return [];
  } else {
    favListFromStorage = JSON.parse(favListFromStorage);
    return favListFromStorage;
  }
}

const initialState = {
  movies: getFavouriteList(),
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      let updatedList = [...state.movies];
      const index = updatedList.findIndex(
        (favourite) => favourite.id === action.payload.id
      );

      if (index !== -1) {
        updatedList[index] = {
          ...updatedList[index],
          isFavourited: !updatedList[index].isFavourited,
        };
        if (!updatedList[index].isFavourited) {
          updatedList.splice(index, 1);
        }
      } else {
        const newMovie = {
          ...action.payload,
          isFavourited: true,
        };
        updatedList = [...state.movies, newMovie];
      }

      localStorage.setItem("favourites", JSON.stringify(updatedList));
      state.movies = updatedList;
    },
  },
});

export const { addFavourite } = favsSlice.actions;

export default favsSlice.reducer;
