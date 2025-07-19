import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "Jewelry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
});

export default navbarSlice.reducer;
