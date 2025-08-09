import React from 'react'
import CommentData from './CommentData';

const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) => (
       <div key={comment.id}>
         <CommentData data={comment} />
         <div className='pl-5 border-l-2 border-gray-300'>
            <CommentList comments={comment.replies} />
          </div>  
       </div>
      ))}
    </div>
  )
}

export default CommentList
