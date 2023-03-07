import React, { useState } from "react";
import "../components/NavBar.css";

import ListItem from "./ListItem";
import classNames from "classnames";

export default function NavBar() {
  
  const [isChecked, setIsChecked] = useState(true);
  

  return (
    <div className="container w-11/12 mx-auto ">
      <nav className="flex flex-col sm:flex-row mt-10 items-center ">
        <div className="logo  sm:basis-3/4 w-full">
          <span className="text-2xl font-medium ">Social Media</span>
          <button
            className="sm:hidden float-right w-8"
            onClick={() => {
              setIsChecked((prev) => !prev);
            }}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        <ul
          
          className={classNames(
            "text-center items-center flex-col sm:flex-row bg-[#458bb6]  sm:bg-transparent w-[100vw] mt-5 sm:mt-0 md:w-[71vw] lg:w-[52vw] xl:w-[29vw]  sm:flex sm:left-0 top-[10%] ",
            {
                'disapper': isChecked,
                'show': !isChecked
            }
          )}
        >
          <ListItem
            name="Login"
            link="#"
            classname="bg-opacity-20 bg-white sm:rounded-md  w-full"
          />
          
            <ListItem name="About Us" link="#" classname=" w-full" />
            <ListItem name="Register" link="#" classname=" w-full" />
            <ListItem name="Contact" link="#" classname=" w-full"/>
          
          
        </ul>
      </nav>
    </div>
  );
}
