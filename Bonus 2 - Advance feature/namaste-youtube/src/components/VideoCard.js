import React from 'react'

const VideoCard = ({info}) => {
                                                                                   
    const {snippet , statistics}  = info;
    const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-[20rem] hover:shadow-2xl hover:bg-gray-300 hover:rounded-xl'>
        <img src={thumbnails.medium.url} alt="video" className='rounded-xl'/>
        <div className='font-bold'>{title}</div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCount} view</div>
    </div>
  )
}

export default VideoCard