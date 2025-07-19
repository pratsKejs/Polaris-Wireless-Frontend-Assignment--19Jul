import { createSlice } from "@reduxjs/toolkit";
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
} from "../assets";

const initialState = [
  {
    id: 1,
    imageURL: productImg1
  },
  {
    id: 2,
    imageURL: productImg2
  },
  {
    id: 3,
    imageURL: productImg3
  },
  {
    id: 4,
    imageURL: productImg4
  },
  {
    id: 5,
    imageURL: productImg5
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
