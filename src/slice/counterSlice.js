import { createSlice } from '@reduxjs/toolkit'

// initialState
const initialState = {
  value: 0,
}

// CounterSlice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
      if (state.value < 0) {
        state.value = 0
      }
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer