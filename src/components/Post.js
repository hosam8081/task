import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deletePost } from '../slice/postsSlice'
const Post = ({title, id}) => {
  const dispatch = useDispatch()
  return (
    <div className="mb-2 hvr-gray px-2">
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          {title}
        </div>
        <div>
          <button className='hvr-scale btn' onClick={() => dispatch(deletePost(id))}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post