import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=1`;

// initialState
const initialState = {
  loading:true,
  movies: [],
};

// Fetch All Movies
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, ThunkApi) => {
    const res = await axios(`${url}`).catch((err) => console.log(err));
    return res.data;
  }
);

// movie Slice
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    // get movie
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default moviesSlice.reducer;
