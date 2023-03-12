import React, { useState } from 'react'
import HomeIcons from './HomeIcons'
import "./Home.css"
import logo from './../images/logo.png'
import UserImage from './UserImage'
import userImage from './../images/userImage.png'
import DropDownUser from './DropDownUser'
import UserData from './UserData'
import './Navbar/NavBar.css'
import classNames from 'classnames'

export default function HomeNavBar() {
    const profileList = [
        {key : 1,name: "Profile" , icon:"fa-solid fa-id-badge",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 2,name: "notification" , icon:"fa-solid fa-bell fa-lg",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 3,name: "Settings" , icon:"fa-solid fa-gear fa-lg",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 4,name: "Logout" , icon:"fa-solid fa-arrow-right-from-bracket",classname:"w-[35px] h-[35px] leading-[36px] bg-red-500",link:"/login"}
    ]
    
    const userData = <UserData />
    const [isChecked, setIsChecked] = useState(false);
  return (
        <div>
            <div className='w-full h-20 sm:h-20  bg-[#51aedc] flex gap-5 items-center md:gap-12 sm:pl-10'>
                <div className="logo flex items-center ">
                <img src={logo} alt="this is logo" className="w-10 ml-5 sm:mb-0 " />
                <span className="text-2xl font-medium hidden lg:inline-block">Social Media</span>
                </div>
                <div className='bg-white h-10 px-4 flex gap-3 items-center rounded-md search'> 
                    <i className="fa-solid fa-magnifying-glass "></i>
                    <input type="text" placeholder='Search for friends here...' className='outline-none'/>
                </div>
                <button onClick={() => setIsChecked((prev) => !prev)} className="w-10 h-10 sm:hidden arou"><UserImage userimage={userImage} classname="w-10"/></button>
            </div>
            
                <DropDownUser userData = {userData} profileList={profileList} classname={classNames("sm:hidden",
                {
                    'disapper':!isChecked,
                    'show':isChecked
                }
                )}/>
            
        </div>
  )
}
