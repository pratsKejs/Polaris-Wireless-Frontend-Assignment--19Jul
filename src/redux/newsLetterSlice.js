import { createSlice } from "@reduxjs/toolkit";
import { dressURL1, dressURL2, dressURL3, dressURL4, dressURL5, dressURL6, dressURL7, dressURL8 } from "../assets";

const initialState = [
  {
    id: 1,
    imageURL: dressURL1,
  },
  {
    id: 2,
    imageURL: dressURL2,
  },
  {
    id: 3,
    imageURL: dressURL3,
  },
  {
    id: 4,
    imageURL: dressURL4,
  },
    {
    id: 5,
    imageURL: dressURL5,
  },
    {
    id: 6,
    imageURL: dressURL6,
  },
    {
    id: 7,
    imageURL: dressURL7,
  },
    {
    id: 8,
    imageURL: dressURL8,
  },
];

const newsLetterSlice = createSlice({
  name: "newsLetterProducts",
  initialState,
  reducers: {},
});

export default newsLetterSlice.reducer;
