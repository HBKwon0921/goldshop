import { createSlice } from "@reduxjs/toolkit";

export let cart = createSlice({
  name: "cart",
  initialState: [
    {
      _id: 2,
      img: "image2.jpg",
      price: "126250",
      count: "1",
    },
    { _id: 8, img: "image2.jpg", price: "126250", count: "1" },
  ],
});

export default cart;
