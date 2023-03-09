import React from 'react'
import "../components/NavBar.css";

export default function TitleBody(props) {
    const {title,content,content2} = props
  return (
    <div className='ml-14 mt-5 md:mt-0 md:ml-0 md:mb-7' >
      <h4 className='text-[#080e64] text-[20px] leading-[1.8]'>{title}</h4>
      <span className=' block '>{content}</span>
      <span className='block'>{content2}</span>
    </div>
  )
}
