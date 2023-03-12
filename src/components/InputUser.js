import classNames from 'classnames'
import React from 'react'

export default function InputUser({name  ,type, icon,firstChildClassname,classname}) {
  return (
    <div className={classNames("container w-11/12 mx-auto ",classname)}>
        <div className={classNames("bg-opacity-20 bg-white rounded-full w-[20rem] sm:w-[47%] mx-auto  h-14 pl-5 md:pl-8 mb-4 leading-[56px] ",firstChildClassname,classname)}>
            <i className={icon} ></i>
            <input type= {type} placeholder ={name} required className={classNames("bg-transparent placeholder-[#FFFFFF] outline-none active:border-0 focus:border-none ")}/>
        </div>
        
       
    </div>
  )
}
