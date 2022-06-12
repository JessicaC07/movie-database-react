import { createSlice } from '@reduxjs/toolkit';

const savedFavourites = localStorage.getItem("favourites");
const initialValue = JSON.parse(savedFavourites);

const initialState = {
  items: initialValue || []
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = newFavs;
      localStorage.setItem("favourites", JSON.stringify(newFavs));
    },
    deleteFav: (state, action) => {
      const newFavs = state.items;
      newFavs.splice(getIndex(action.payload, state.items), 1);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = newFavs;
      localStorage.setItem("favourites", JSON.stringify(newFavs));
    }
  },
});

// Action creators are generated for each case reducer function
export const { addFav, deleteFav } = favsSlice.actions

export default favsSlice.reducer;

