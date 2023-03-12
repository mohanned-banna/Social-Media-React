import React from 'react'
import classNames from 'classnames'
import InputUser from '../components/InputUser'
import ButtonSubmit from '../components/ButtonSubmit'
import TitleBody from './../components/TitleBody'
import ContactIcon from '../components/ContactIcon'

import NavBar  from '../components/Navbar/NavBar';


export default function ContactPage() {
    const Icon = [
      {key:1, icon:"fa-brands fa-facebook",link:"#"},
      {key:2, icon:"fa-brands fa-instagram",link:"#"},
      {key:3, icon:"fa-brands fa-twitter",link:"#"}
    ]
  return (
    <div><NavBar />
    <div className={classNames("md:flex mx-auto md:my-7 gap-20 container md:w-[85%]  md:flex-wrap lg:w-11/12")}>
      <img className= {classNames("   rounded-tr-[100px] rounded-bl-[100px]  hidden lg:block md:w-1/4 ")}
      src="https://media.istockphoto.com/id/956469164/vector/blockchain-technology-futuristic-hud-banner-with-hands-and-globe.jpg?s=612x612&w=0&k=20&c=5dzCB3zh2s3a_HNahxDGFY4jt8mXu9V-oJzpJv8oa-w=" alt="this is image" />
      <div className='md:flex-1 md:flex md:flex-col  '>
          <div className='md:flex-1  md:mt-9 '>
            <h2 className='font-serif text-[#00054B] text-4xl md:text-[80px] mx-auto md:mx-0 mt-6 w-48 md:w-full md:mb-16'>Contact Us</h2>
          </div>

        <div className='md:flex md:flex-[50%]'>
            <form action="#" className=' md:ml-0 md:mx-[25%] '>
                <InputUser name="Full Name" type="text" firstChildClassname="mt-[12%] md:mt-0" classname='md:mx-0 md:w-[115%] md:pb-4'/>
                <InputUser name="E-mail" type="email" classname='md:mx-0 md:w-[115%] md:pb-4'/>
                <InputUser name="Message" type="text" classname='md:mx-0 md:w-[115%] md:pb-4'/>
                <ButtonSubmit name="CONTACT US" classname='md:ml-0 md:mr-0 md:w-[115%] md:pb-4'/>
            </form>
              <div className='md:leading-[10] '>
                  <TitleBody title="contact" content="mohanned.banna03@gmail.com" />
                  <TitleBody title="Based in" content2="alnassar st, gaza , palestine" content="+972594751621"/>
                    <div className='flex mt-5 sm:gap-10 '>
                        {Icon.map((element) => <ContactIcon key={element.key} icon={element.icon} link={element.link} />)}
                    </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
