import React from 'react'
import TitleIcons from './TitleIcons'
import UserData from './UserData'
import user1 from './../images/user1.png'
import user2 from './../images/user2.png'
import user3 from './../images/user3.png'
import user4 from './../images/user4.png'


export default function RightTopPanel() {
  return (
    <div className='  hidden md:flex flex-col gap-1 items-left px-5  bg-white py-3 shadow-xl ' >
      <h2 className="text-red-400 font-semibold ">People you may know</h2>
      <UserData userImage ={user1} classname ="flex grow-1 min-w-[200px]" classImg="w-12" detail="I am a metal man, who saves lots.." name="Tony Stark"/>
      <UserData userImage ={user2} classname ="flex grow-1 min-w-[200px]" classImg="w-12" detail="Green human with scietific kno...." name="Bruce Banners" />
      <div className='h-[2px] bg-[#0F191A40] w-11/12 mx-auto'></div>
      <UserData userImage ={user3} classname ="flex grow-1 min-w-[200px]" classImg="w-9" detail="Tagged you in her 250th post a.." name="Natasha Ramanoff" />
      <UserData userImage ={user4} classname ="flex grow-1 min-w-[200px]" classImg="w-9" detail="Liked your comment on their po..." name="Barton Clint" />
    </div>
  )
}
