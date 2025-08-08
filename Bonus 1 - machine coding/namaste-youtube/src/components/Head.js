import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleHandler = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-1 m-1 shadow-lg bg-white'>
        <div className='flex col-span-1 justify-evenly'>
            <img onClick={toggleHandler} 
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="sidebar" className='h-8 cursor-pointer'/>
            <img src="../image/download.jpeg" alt="Logo" className='h-8 bg-transparent cursor-pointer' />
        </div>
        <div  className=' col-span-11 text-center'>

            <input type="text" className='border border-gray-400 rounded-l-full px-20 py-1' />
            <button  className='border border-gray-400 rounded-r-full py-1 px-1'>🔍</button>
        </div>
        <div className='flex col-span-1 '>
            <button className='h-8 px-1'>🔔</button>
            <button className='h-8 px-1'>🎦</button>
            <img src="../image/user.png" alt="User_Img" className='h-8 px-1 bg-transparent' />
        </div>
    </div>
  )
}

export default Head