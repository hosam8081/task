import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fake-tasks.herokuapp.com/posts";
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, ThunkApi) => {
    const res = await axios(`${url}`).catch((err) => console.log(err));
    return res.data;
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, ThunkApi) => {
    const res = await axios
      .post(`${url}`, {
        title: post,
      })
      .catch((err) => console.log(err));
    return res.data;
  }
);
const initialState = {
  loading: true,
  singleLoaing:"true",
  posts: [],
  text: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // get posts
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },

    // add post
    [addPost.pending]: (state) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
    },
    [addPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { increment, decrement } = postsSlice.actions;

export default postsSlice.reducer;
