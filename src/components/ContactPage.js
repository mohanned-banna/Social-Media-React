import React from 'react'
import classNames from 'classnames'
import InputUser from './InputUser'
import ButtonSubmit from './ButtonSubmit'
import TitleBody from './TitleBody'
import ContactIcon from './ContactIcon'


export default function ContactPage(props) {
    const {ContactImg} = props
  return (
    // <div>
    //   <img className= {classNames("w-[60%] mx-auto mt-12 rounded-tr-[100px] rounded-bl-[100px]")}
    //   src="https://s3-alpha-sig.figma.com/img/9cfe/1b16/b6c476e125ce5eacba4d925e8723b3c8?Expires=1679270400&Signature=CKrXQDk-4AiyWURwrRZSVVK2WWqL6Nael1wSLC1vAJkKnYD2HDPb1fR7DK29IkVWLbGn5UZZrm16zrM2y22YWEkIDtLYOJXtdlIiElWpZl0xB-gGnkRBeVeZY5GLKol1pC3vVTZx42eaNUByPvAG0rZmNflSUwCdbsKa7zh9WlzMJgGek5k02BFzNJfsYQdIEhFkOLrWKhVBKeZr7QYrRwlfB9WDsb5SJzpOqH2BLKWZBNE14MhAbQdLAFO-pIZzLSedknXsc~XKPK4zhukcUCY7BcTjrWUckUIO4-ioDzTBoTcMt-Yx6q9AUKYxySp0XyS4xSi3PKaP11bi9Ny~rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="this is image" />
    // </div>
    <div>
        <h2 className='font-serif text-[#00054B] text-4xl mx-auto mt-6 w-48'>Contact Us</h2>
        <form action="#" className='mb-8'>
            <InputUser name="Full Name" type="text" firstChild="mt-[12%]"/>
            <InputUser name="E-mail" type="email" />
            <InputUser name="Message" type="text" />
            <ButtonSubmit name="CONTACT US" />
        </form>
        
        <TitleBody title="contact" content="mohanned.banna03@gmail.com"/>
        <TitleBody title="Based in" content2="alnassar st, gaza , palestine" content="+972594751621"/>
        <div className='flex mt-5 '>
            <ContactIcon icon="fa-brands fa-facebook" link="#"/>
            <ContactIcon icon="fa-brands fa-instagram" link="#"/>
            <ContactIcon icon="fa-brands fa-twitter" link="#"/>
        </div>
        
        
    </div>
  )
}
