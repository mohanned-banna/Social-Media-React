import React, { useState } from "react";
import "./NavBar.css";

import ListItem from "../ListItem";
import classNames from "classnames";
import logo from './../../images/logo.png'

const navLinks = [
   { key:1 , name: "Login", link: '/Login' , classname : "w-full text-red"},
   { key:2 , name: "About Us", link: '/About Us' , classname : "w-full"},
   { key:3 , name: "Register", link: '/Register' , classname :"w-full"},
   { key:4 , name: "Contact", link: '/Contact' , classname : "w-full"},
   { key:5 , name: "Home", link: '/home' , classname : "w-full"},
  

]
export default function NavBar() {  
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="container w-11/12 mx-auto">
      <nav className="flex flex-col sm:flex-row mt-10 items-center border-b-4 pb-3 border-r-0 sm:border-none">
        <div className="logo w-full lg:flex gap-3 items-center ">
          <img src={logo} alt="this is logo" className="w-10 ml-5 mb-4 sm:mb-0 inline" />
          <span className="text-2xl font-medium hidden lg:inline-block">Social Media</span>
          <button
            className="sm:hidden float-right w-8"
            onClick={() => {
              setIsChecked((prev) => !prev);
            }}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        <ul className={classNames( "text-center items-center flex-col sm:flex-row bg-[#458bb6]  sm:bg-transparent w-[100vw] mt-5 sm:mt-0 md:w-[71vw] lg:w-[52vw]   sm:flex sm:left-0 top-[10%] ",
            {
                'disapper invisible sm:visible':  !isChecked,
                'show': isChecked
            }
          )}>
              {navLinks.map((item) => <ListItem onClick={() => setIsChecked(false)} key = {item.key} name={item.name} link={item.link} classname={item.classname} />)}
        </ul>
        
      </nav>
    </div>
  );
}
