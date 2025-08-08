import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className='shadow-2xl shadow-gray-500 w-48 pl-2 h-full'>
      <div className='pt-5'>
        <div className='font-bold'><Link to="/">Home</Link></div>
        <div className='font-bold'> Short</div>
        <div className='font-bold'>Subscription</div>
      </div>
    <div className='w-[165px]'>
      <h1 className='font-bold pt-5 w-full'>You {">"}</h1>
      <ul>
        <li>👨‍🏫 Your Channel</li>
        <li>🕑 History</li>
        <li>📃 PlayList</li>
        <li>🎥 Your Video</li>
        <li>💡 Your Courses</li>
        <li>🕓 Watch Later</li>
        <li>👍 Liked Video</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar