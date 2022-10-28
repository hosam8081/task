import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=22f8cb7ddbbef2f2669e89e4b118d04e&language=en-US&page=1`
const initialState = {
  movies: [],
}

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, ThunkApi) => {
    const res = await axios(`${url}`).catch((err) => console.log(err));
    return res.data;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers:{
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
  }
})


export default moviesSlice.reducer