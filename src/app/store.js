import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer
    },
});