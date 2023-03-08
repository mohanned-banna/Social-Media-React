import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <NavBar />
        <InputUser name ="User Name" type="text" icon="fa fa-user text-white mr-3 " firstChild="mt-[65%] sm:mt-[25vh] input-user"/>
        <InputUser name ="Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <ButtonSubmit name="GET STARTED"/>
        <ul className="flex absolute sm:w-[25rem] sm:mt-44 sm:ml-5 mt-24 bottom-3 ml-[-2%] parent-footer">
          <ListItem name="About Us" link="#" classname =" ml-6 pl-2 pr-2 footer"/>
          <ListItem name="Privacy Policy" link="#" classname =" mx-0 pl-2 pr-2 footer"/>
          <ListItem name="Terms Of Use" link="#" classname =" pl-2 pr-2 footer"/> 
        </ul>
    </div>
  )
}
