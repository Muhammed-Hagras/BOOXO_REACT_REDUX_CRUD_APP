import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    books: [],
    isLoading:false,
    error: null,
    bookInfo: null
};

const baseURL = "http://localhost:3005/books"

export const getBooks = createAsyncThunk("books/getBooks", async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res =await axios.get(baseURL);
        return res.data;
    } catch(err) {
        return rejectWithValue(err.message)
    }
})

export const addBooks = createAsyncThunk("books/addBooks", async (book, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.post(baseURL, book);
        return res.data;
    } catch(err) {
        return rejectWithValue(err.message)
    }
})

export const deleteBooks = createAsyncThunk("books/deleteBooks",async ({ id }, thunkAPI) => {
    const {rejectWithValue} = thunkAPI  
    try {
        const res = await axios.delete(`${baseURL}/${id}`); //axios.delete(`${baseURL}/${id}`);
        return res.id;
    } catch (err) {
        return rejectWithValue(err.message)
    }
    }
  );

  export const getOneBook= createAsyncThunk(
    "books/getBook",
    async ({userId}, { rejectWithValue }) => {
      try {
        const res = await axios.get(`${baseURL}/${userId}`);;
        return res.data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );



const bookSlice =createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: {
        //-------GET BOOK
        [getBooks.pending]: (state, action) =>{
            state.isLoading = true;
        },
        [getBooks.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) =>{
            state.isLoading = false;
            state.error = action.payload;
        },

        //-------ADD BOOK
        [addBooks.pending]: (state, action) =>{
        },
        [addBooks.fulfilled]: (state, action) =>{
            state.books.push(action.payload)
        },
        [addBooks.rejected]: (state, action) =>{
        },

        //-------DELETE BOOK
        [deleteBooks.pending]: (state, action) => {
            // state.isLoading = true;
          },
          [deleteBooks.fulfilled]: (state, action) => {
            // state.isLoading = false;
            const {
              arg: { id },
            } = action.meta;
            if (id) {
              state.books = state.books.filter((item) => item.id !== id);
            }
          },
          [deleteBooks.rejected]: (state, action) => {
            // state.isLoading = false;
            // state.error = action.payload.message;
          },

          //-------GET ONE BOOK
          [getOneBook.pending]: (state, action) => {
            state.loading = true;
          },
          [getOneBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.bookInfo = action.payload;
          },
          [getOneBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
      
    }
});


export const booksReducer = bookSlice.reducer;
export const booksActions = bookSlice.actions;