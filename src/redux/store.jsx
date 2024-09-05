import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/slice";
import productosSlice from "./productos/slice";

const store = configureStore({
    reducer : {
        user: userSlice.reducer,
        productos: productosSlice.reducer
    }
})

export default store