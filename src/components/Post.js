import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePost, setIsEdit, setText } from "../slice/postsSlice";

const Post = ({ title, id }) => {
  const dispatch = useDispatch();
  
  // Handle Edit : update post  
  let handleEdit = () => {
    dispatch(setIsEdit(id))
    dispatch(setText(title))
  }

  return (
    <div className="mb-2 hvr-gray px-2">
      <div className="d-flex justify-content-between align-items-center">
        <div>{title}</div>
        <div>
          <button
            className="hvr-scale btn px-1"
            onClick={() => dispatch(deletePost(id))}
          >
            <AiFillDelete />
          </button>
          <button
            className="hvr-scale btn px-1"
            onClick={() => handleEdit()}
          >
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
