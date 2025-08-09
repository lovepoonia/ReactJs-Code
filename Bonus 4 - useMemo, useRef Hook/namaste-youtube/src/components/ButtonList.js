import React from 'react'
import Button from "./Button"
const ButtonList = () => {
  const list = ["All", "Music", "Karan Aujla","Father's Stideo", "JavaScript" ,"News",  "Sports", "Entertainment", "Web Devlopment", "Technology", "Business", "Health", "Science", "New To You"];

  return (
    <div className='flex'>
      {
        list.map((value) => {
          return <Button key={Math.random()} name={value}/>
        })
      }
      
    </div>
  )
}

export default ButtonList