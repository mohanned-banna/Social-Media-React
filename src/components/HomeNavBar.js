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
import { NavLink } from 'react-router-dom'

export default function HomeNavBar() {
    const profileListMobile = [
        {key : 1,name: "Profile" , icon:"fa-solid fa-id-badge",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 2,name: "notification" , icon:"fa-solid fa-bell",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 3,name: "Settings" , icon:"fa-solid fa-gear",classname:"w-[35px] h-[35px] leading-[36px] bg-[#A9DEF9]",link:""},
        {key : 4,name: "Logout" , icon:"fa-solid fa-arrow-right-from-bracket",classname:"w-[35px] h-[35px] leading-[36px] bg-red-500",link:"/login"}
    ]
    const profileListWeb = [
        {key : 1,name: "Settings" , icon:"fa-solid fa-gear fa-lg",classname:"w-[40px] h-[40px] leading-[40px] bg-white ",link:""},
        {key : 2,name: "charge" , icon:"fa-solid fa-lightbulb fa-lg",classname:"w-[40px] h-[40px] leading-[40px] bg-white ",link:"/login"},
        {key : 3,name: "notification" , icon:"fa-solid fa-bell fa-lg",classname:"w-[40px] h-[40px] leading-[40px] bg-white ",link:""}
    ]
    
    const userData = <UserData />
    const [isChecked, setIsChecked] = useState(false);
  return (
        <div>
            <div className='w-full h-20 sm:h-20 gap-4 bg-[#51aedc] px-3 md:px-2 xl:px-5 flex items-center md:gap-6 lg:gap-12 sm:pl-10 justify-around sm:justify-start '>
                <div className="logo flex items-center gap-2">
                <img src={logo} alt="this is logo" className="max-w-[40px] sm:mb-0 " />
                <span className="  lg:w-[150px] w-[100px] lg:text-2xl font-medium hidden lg:inline-block">Social Media</span>
                </div>
                <div className='bg-white h-10 px-4 flex gap-3 items-center rounded-md search grow-[3] md:grow-0 lg:w-[625px]  '> 
                    <i className="fa-solid fa-magnifying-glass "></i>
                    <input type="text" placeholder='Search for friends here...' className='outline-none'/>
                </div>
                <button onClick={() => setIsChecked((prev) => !prev)} className="w-10 h-10 md:hidden "><UserImage userimage={userImage} classname="w-10"/></button>
                <div className='items-center gap-2 grow-[0.7] hidden md:flex'>
                    
                    <UserData classname ="flex grow-1"/>
                </div>
                <ul className='items-center  hidden md:flex gap-2 justify-center '>
                    {profileListWeb.map((element) => <NavLink key={element.key} to={element.link}> <li >
                        <HomeIcons icon={element.icon} classname={element.classname} /></li></NavLink>)}
                </ul>
                
            </div>
            
                <DropDownUser userData = {userData} profileListMobile={profileListMobile} classname={classNames("sm:hidden",
                {
                    'disapper':!isChecked,
                    'show':isChecked
                }
                )}/>
            
        </div>
  )
}
