import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import heroReducer from "./heroSlice";
import brandsReducer from "./brandsSlice";
import productsReducer from "./productsSlice";
import newsLetterReducer from "./newsLetterSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    hero: heroReducer,
    brands: brandsReducer,
    products: productsReducer,
    newsLetterProducts: newsLetterReducer,
  },
});

export default store;
