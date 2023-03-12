import React from 'react'
import ButtonSubmit from "../components/ButtonSubmit";
import InputUser from "../components/InputUser";
import ListItem from "../components/ListItem";
import "../components/Navbar/NavBar.css";
import NavBar  from '../components/Navbar/NavBar';
import classNames from 'classnames';
import FooterLoginRegister from '../components/FooterLoginRegister';

export default function RegisterPage() {
  return (
    <div>
      <NavBar />
      <form action="#">
        <InputUser name ="Name" icon="fa-solid fa-signature text-white mr-3" firstChildClassname=" sm:mt-[17vh] input-user-register"/>
        <InputUser name ="User Name" type="text" icon="fa fa-user text-white mr-3 " />
        <InputUser name ="Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <InputUser name ="Confirm Password" type="password" icon="fa-solid fa-unlock text-white mr-3" />
        <div className={classNames("container w-11/12 mx-auto")}>
          <ButtonSubmit name="REGISTER"/>
        </div>
      </form>
           <FooterLoginRegister classname="flex relative sm:w-[25rem] sm:mt-[124px] sm:ml-5 mt-20  ml-[-2%] parent-footer"/>
    </div>
  )
}
