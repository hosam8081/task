import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fake-tasks.herokuapp.com/posts";

// Fetch All Posts
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, ThunkApi) => {
    const res = await axios(`${url}`).catch((err) => console.log(err));
    return res.data;
  }
);

// Post 
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

// Delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, ThunkApi) => {
    const res = await axios
      .delete(`${url}/${id}`)
      .catch((err) => console.log(err));
    return id;
  }
);

// initalState
const initialState = {
  loading: true,
  singleLoaing:"true",
  posts: [],
};

// Create Slice
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
    // delete post 
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
      state.loading = false;
      console.log(action.payload)
    },
    [deletePost.rejected]: (state) => {
      state.loading = false;
    },
  },
});


export default postsSlice.reducer;
