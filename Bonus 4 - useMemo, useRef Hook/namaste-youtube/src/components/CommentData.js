import React from 'react'

const CommentData = ({data}) => {
    const {author, text, timestamp} = data;
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg'>
       <img
          src="../image/user.png"
          alt="User_Img"
          className="h-12 w-12 rounded-full"
        />
        <div className='px-3'>
            <div className='flex '>
             <p className='font-semibold pr-2'>{author}</p>
             <p className='text-gray-500'>{new Date(timestamp).toLocaleString()}</p>
            </div>
            <p>{text}</p>
           
        </div>
    </div>
  )
}

export default CommentData
