
import {configureStore} from "@reduxjs/toolkit";
import { booksReducer } from "./reducer/bookSlice"

export const store = configureStore({
    reducer: {
        booksReducer,
    }
})