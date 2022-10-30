import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, setIsEdit, updatePost } from "../slice/postsSlice";
import { Button, InputGroup, Form } from "react-bootstrap";
import { setText } from "../slice/postsSlice";
const CreatePost = () => {
  const {text, isEdit} = useSelector(state => state.posts)
  const dispatch = useDispatch();
  
  // handle Submit: to add post
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if it post
    if (text.trim() !== "" && isEdit == null) {
      dispatch(setText(''))
      dispatch(addPost(text));
    }
    //check for update
    else if (isEdit !== null) {
      dispatch(updatePost(isEdit))
      dispatch(setText(''))
      dispatch(setIsEdit(null))
    } 
    else {
      alert('type a word')
    }
  };

  return (
    <>
      <h1 className="text-center mb-3">Posts</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex text-center justify-content-center"
      >
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add post"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <Button
            variant="success"
            id="button-addon1"
            onClick={(e) => handleSubmit(e)}
          >
            {isEdit ? "Edit" : "Post"}
          </Button>
        </InputGroup>
      </form>
    </>
  );
};

export default CreatePost;
