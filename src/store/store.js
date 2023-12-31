import { configureStore } from "@reduxjs/toolkit";

import { user } from "./user";
import { stock } from "./stock";
import { cartList } from "./cartList";
import { pData } from "./pData";
import { watched } from "./watchedData";

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartList: cartList.reducer,
    pData: pData.reducer,
    watched: watched.reducer,
  },
});
