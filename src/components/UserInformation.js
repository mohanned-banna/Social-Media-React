import React from 'react'
// import UserImage from './UserImage'

import userImage from './../images/UserImagelarge.png'
import TitleIcons from './TitleIcons'
import UserData from './UserData'

export default function UserInformation() {
  const UsericonA = [
    {key : 1,name: "Profile" , icon:"fa-solid fa-id-badge fa-sm",classname:"w-[30px] h-[30px] leading-[30px] bg-[#A9DEF9]",link:""},
    {key : 2,name: "Find friends" , icon:"fa-solid fa-users fa-sm",classname:"w-[30px] h-[30px] leading-[30px] bg-[#A9DEF9]",link:""},
    {key : 3,name: "User analytics" , icon:"fa-solid fa-arrow-up-right-dots fa-sm",classname:"w-[30px] h-[30px] leading-[30px] bg-[#A9DEF9]",link:""}
]
const UsericonB = [
  {key : 1,name: "Settings" , icon:"fa-solid fa-gear",classname:"w-[30px] h-[30px] leading-[30px] bg-[#A9DEF9]",link:""},
  {key : 2,name: "Security data" , icon:"fa-solid fa-file-shield",classname:"w-[30px] h-[30px] leading-[30px] bg-[#A9DEF9]",link:""},
  {key : 3,name: "Logout" , icon:"fa-solid fa-arrow-right-from-bracket",classname:"w-[30px] h-[30px] leading-[30px] bg-red-500",link:"/login"}
]
  return (
    <div className='md:w-[21vw] lg:w-[20vw] bg-white hidden md:flex flex-col py-16 gap-12 items-center fixed h-[100vh] left-0'>
      <UserData userImage ={userImage} classname="block text-center" classImg="max-w-[80px] inline" name="Mohanned El-Banna" />
      <TitleIcons title="Explore panel" classtitle="text-red-400 font-semibold " Usericon={UsericonA}/>
      <TitleIcons title="Settings" classtitle="text-red-400 font-semibold " Usericon={UsericonB}/>
      
    </div>
  )
}
