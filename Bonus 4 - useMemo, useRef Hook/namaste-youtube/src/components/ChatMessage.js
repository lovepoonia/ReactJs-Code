import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-md p-2 mb-2 bg-white rounded'>
         <img
          src="../image/user.png"
          alt="User_Img"
          className="h-8 rounded-full"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;