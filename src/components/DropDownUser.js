import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar/NavBar.css'
import HomeIcons from './HomeIcons';
import classNames from 'classnames';

export default function DropDownUser({userData="" , profileList ,classname}) {
    
  return (
    <div className={classNames(' bg-[#458bb6] text-white w-11/12 p-5 gap-y-5 rounded-2xl mx-4 mt-5 flex flex-col',classname)}>
       {userData}
       <ul className='flex flex-col gap-8 text-lg font-semibold font-sans'>
        {profileList.map((element) => <NavLink key={element.key} to={element.link}> <li >
            <HomeIcons icon={element.icon} classname={element.classname} />
            {element.name}</li></NavLink>)}
       </ul>
    </div>
  )
}
