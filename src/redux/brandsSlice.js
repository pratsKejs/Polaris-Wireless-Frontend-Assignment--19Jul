import { createSlice } from "@reduxjs/toolkit";
import { brandImg1, brandImg2, brandImg3, brandImg4, brandImg5 } from "../assets";

const initialState = [
  {
    name: "Graphic Studio Brand Logo",
    logoURL: brandImg1,
  },
  {
    name: "S.Salva Brand Logo",
    logoURL: brandImg2,
  },
  {
    name: "Golden Studio Brand Logo",
    logoURL: brandImg3,
  },
  {
    name: "Furniture Design Brand Logo",
    logoURL: brandImg4,
  },
  {
    name: "Travel Lookbook Brand Logo",
    logoURL: brandImg5,
  },
];

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
});

export default brandsSlice.reducer;
