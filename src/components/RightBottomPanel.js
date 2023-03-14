import React from 'react'
import TitleIcons from './TitleIcons'
import UserData from './UserData'
import user1 from './../images/user1.png'
import user2 from './../images/user2.png'
import user3 from './../images/user3.png'
import user4 from './../images/user4.png' 
import dog from './../images/dog.png' 
import users from './../images/users.jpg' 





export default function RightBottomPanel() {
  return (
    <div className=' bg-white hidden md:flex flex-col gap-1 items-left px-5 py-4  shadow-xl items-stretch ' >
        <h2 className="text-red-400 font-semibold mb-2">Boost your post</h2>
      <img src={dog} alt="this is image" />
      <h3 className='text-black font-bold'>@steve_rogers <span className='font-normal text-sm'>With my lovable</span></h3>
      <span className='text-sm'>dog named Bruno with a smile &....</span>
      <span className='text-[#4361EE] text-sm'><img src={users} alt="this is image" className='w-[54px] inline'/> & 180 others liked your post & ... </span>
      
      
    </div>
  )
}