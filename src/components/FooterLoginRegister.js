import React from 'react'
import ListItem from './ListItem'

export default function FooterLoginRegister({classname}) {
  return (
    <ul className={classname}>
        <ListItem name="About Us" link="/About Us" classname =" ml-6   footer  sm:w-[100px]"/>
        <ListItem name="Privacy Policy" link="/Privacy Policy" classname =" mx-0 pl-2 pr-2 footer sm:w-[100px]"/>
        <ListItem name="Terms Of Use" link="/Terms Of Use" classname =" pl-2 pr-2 footer sm:w-[100px]"/> 
    </ul>
  )
}
