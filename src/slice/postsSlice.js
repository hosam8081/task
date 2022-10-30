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
    await axios.delete(`${url}/${id}`).catch((err) => console.log(err));
    return id;
  }
);

// update post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (id, ThunkApi) => {
    const res = await axios
      .put(`${url}/${id}`, { title: ThunkApi.getState().posts.text })
      .catch((err) => console.log(err));
    return res.data;
  }
);

// initalState
const initialState = {
  loading: true,
  posts: [],
  text: "",
  isEdit: null,
};

// Create Slice
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
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
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.loading = false;
    },
    [deletePost.rejected]: (state) => {
      state.loading = false;
    },
    // update post
    [updatePost.pending]: (state) => {
      state.loading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      const { title, id } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post.id === id ? { ...post, title } : post
      );
    },
    [updatePost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setText, setIsEdit } = postsSlice.actions;

export default postsSlice.reducer;
