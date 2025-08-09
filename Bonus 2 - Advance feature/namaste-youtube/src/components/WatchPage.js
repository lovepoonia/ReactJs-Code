import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isManu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const [searchParams] =useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(isManu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className='px-5 '>
        <iframe width="1000" height="550" src={"https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <CommentContainer />
    </div>
  )
}

export default WatchPage