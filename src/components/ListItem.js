import React from 'react'
import  {Link}  from 'react-router-dom' 
import classNames from 'classnames'
import '../components/NavBar.css';

export default function ListItem(props) {
    const{name , link ,classname , isChecked} = props
  return (
    <li className={
        classNames("sm:mx-2 pl-5 sm:pl-0 sm:ml-0 my-2 text-left sm:text-center py-[10px] text-[17px] sm:text-lg  sm:w-[40%] sm:hover:bg-opacity-20 sm:hover:bg-white rounded-md  duration-300 text-white sm:text-black",classname)
    } ><a to={link}>{name}</a></li>
  )
}
