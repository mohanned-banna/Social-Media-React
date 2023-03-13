import React from 'react'
import ButtonSubmit from "../components/ButtonSubmit";
import InputUser from "../components/InputUser";
import ListItem from "../components/ListItem";
import "./../components/Navbar/NavBar.css";
import NavBar  from '../components/Navbar/NavBar';
import classNames from 'classnames';
import FooterLoginRegister from '../components/FooterLoginRegister';

export default function LoginPage() {
  return (
    <div>
      <NavBar />
      <form action="#">
        <InputUser name ="User Name" type="text" icon="fa fa-user text-white mr-3 " firstChildClassname="mt-[65%] sm:mt-[25vh] input-user" />
        <InputUser name ="Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <div className={classNames("container w-11/12 mx-auto")}>
           <ButtonSubmit name="GET STARTED"/>
        </div>
      </form>
          <FooterLoginRegister classname="flex relative sm:w-[25rem] sm:mt-52 sm:ml-5 mt-40 parent-footer"/>
    </div>
  )
}
