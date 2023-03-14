import classNames from 'classnames'
import React from 'react'
import HomeIcons from './HomeIcons'
import { NavLink } from 'react-router-dom'

export default function TitleIcons({title,classtitle,Usericon}) {
  return (
    <div className='text-left w-10/12'>
      <h2 className={classNames(classtitle)}>{title}</h2>
      <ul className='flex flex-col gap-5 font-sans py-5 md:text-[14px]'>
        {Usericon && Usericon.map((element) => <NavLink key={element.key} to={element.link}> <li >
            <HomeIcons icon={element.icon} classname={element.classname} />
            {element.name}</li></NavLink>)}
       </ul>
    </div>
  )
}
