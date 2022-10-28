import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../slice/postsSlice';
import {Button, InputGroup, Form} from 'react-bootstrap'
const CreatePost = () => {
  const  [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(" ")
    dispatch(addPost(text))
  } 
  return (
    <>
    <h1 className='text-center mb-3'>Posts</h1>
      <form onSubmit={handleSubmit} className="d-flex text-center justify-content-center"> 
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add post"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="success" id="button-addon1" onClick={(e) => handleSubmit(e)}>post</Button>
      </InputGroup>
    </form>
    </>
  )
}

export default CreatePost