import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slice/counterSlice';
import {Button} from 'react-bootstrap'
const Counter = () => {
  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="mt-3 text-center">
      <Button onClick={() => dispatch(increment())}>add</Button>
      <h2>{value}</h2>
      <Button variant="danger" onClick={() => dispatch(decrement())}>minus</Button>
    </div>
  )
}

export default Counter