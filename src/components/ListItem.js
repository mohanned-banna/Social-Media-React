import React from 'react'
import  {Link, NavLink}  from 'react-router-dom' 
import classNames from 'classnames'
import '../components/NavBar.css';

export default function ListItem(props) {
    const{name , link ,classname,classnameNavLink} = props
  return (
   <NavLink to={link} className={({isActive}) =>{
    return (isActive ? "bg-opacity-20 bg-white sm:rounded-md  w-full py-[5px] px-[8px]  sm:py-0 sm:mx-2" : "sm:hover:bg-opacity-20 sm:hover:bg-white rounded-md  duration-300 py-[5px] sm:px-[8px] w-full  sm:py-0 sm:mx-2")
   }} > 
    <li className={
          classNames(" pl-5 sm:pl-0 sm:ml-0   sm:text-center py-[10px] text-[17px] sm:text-lg   sm:hover:bg-opacity-20 text-white sm:text-black text-left w-[120px] sm:w-20",classname)
      }>{name}</li>
   </NavLink> 
      )
}

