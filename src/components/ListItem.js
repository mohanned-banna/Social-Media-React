import React from 'react'
import  {Link, NavLink}  from 'react-router-dom' 
import classNames from 'classnames'
import "./Navbar/NavBar.css";

export default function ListItem({name , link ,classname,onClick}) {
  return (
   <NavLink to={link} className={({isActive}) =>{
    return (isActive ? "bg-opacity-20 bg-white sm:rounded-md   py-[5px] px-[8px] sm:mx-2 sm:py-0  w-full sm:w-[120px]" : "sm:hover:bg-opacity-20 sm:hover:bg-white rounded-md  duration-300 py-[5px] sm:px-[8px] w-full md:w-[120px]  sm:py-0 sm:mx-2")
   }} onClick={onClick} > 
    <li className={
          classNames(" pl-5 sm:pl-0 sm:ml-0   sm:text-center py-[10px] text-[17px] sm:text-lg   sm:hover:bg-opacity-20 text-white sm:text-black text-left w-[120px] sm:w-20  md:w-[100px]",classname)
      }>{name}</li>
   </NavLink> 
      )
}

