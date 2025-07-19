import { createSlice } from "@reduxjs/toolkit";
import { heroImg } from "../assets";

const initialState = {
  title: "Collections",
  subtitle:
    "You can explore and shop many different collections from various brands here",
  buttonText: "Shop Now",
  imageURL: heroImg,
  imageName: "Woman Fashionista Image"
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
});

export default heroSlice.reducer;
