import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slice/counterSlice';
const Counter = () => {
  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>add</button>
      {value}
      <button onClick={() => dispatch(decrement())}>minus</button>
    </div>
  )
}

export default Counter