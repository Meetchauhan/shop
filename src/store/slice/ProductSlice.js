import { createSlice } from "@reduxjs/toolkit";

const data = {
  favorite: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    addFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    checkout(state, action) {
      state.cart = [];
    },
    // checkout(state, action) {
    //   state.cart = action.payload
    // }
  },
});

export const { addFavorite, removeFavorite, addToCart, removeCart, checkout } =
  productSlice.actions;

export default productSlice.reducer;
