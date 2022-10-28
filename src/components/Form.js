import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../slice/postsSlice';
const Form = () => {
  const  [text, setText] = useState("");
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" placeholder='add Post' onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => dispatch(addPost(text))}>add post</button>
    </div>
  )
}

export default Form