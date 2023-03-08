import React from 'react'
import ButtonSubmit from "./ButtonSubmit";
import InputUser from "./InputUser";
import ListItem from "./ListItem";
import "./NavBar.css";

export default function LoginPage() {
  return (
    <div>
      <form action="#">
        <InputUser name ="User Name" type="text" icon="fa fa-user text-white mr-3 " firstChild="mt-[65%] sm:mt-[25vh] input-user" />
        <InputUser name ="Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <ButtonSubmit name="GET STARTED"/>
      </form>
        
        <ul className="flex relative sm:w-[25rem] sm:mt-52 sm:ml-5 mt-44  ml-[-2%] parent-footer">
          <ListItem name="About Us" link="/About Us" classname =" ml-6   footer sm:w-15 "/>
          <ListItem name="Privacy Policy" link="/Privacy Policy" classname =" mx-0 pl-2 pr-2 footer sm:w-[100px]"/>
          <ListItem name="Terms Of Use" link="/Terms Of Use" classname =" pl-2 pr-2 footer sm:w-[100px]"/> 
        </ul>
    </div>
  )
}
