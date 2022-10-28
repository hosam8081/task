import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import moviesSlice from './slice/moviesSlice'
import postsSlice from './slice/postsSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    posts: postsSlice,
    movies:moviesSlice
  },
})