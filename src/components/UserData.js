import classNames from 'classnames'
import React from 'react'
// import userImage from './../images/userImage.png'

export default function UserData({classname,userImage,detail="",classImg="",name}) {
  return (
    <div className={classNames("")}>
       <div className= {classNames('logo items-center  gap-3 border-b-2 sm:border-0 pb-2 sm:pb-0',classname)}>
            <img src={userImage} alt="this is user image" className={classNames(classImg)}/>
            <div className='user-data min-w-[160px]'>
                <h2 className={classNames('text-lg font-semibold font-sans sm:text-[16px]')}>{name}</h2>
                <span className='text-[13px]'>{detail}</span>
            </div>
        </div>
    </div>
  )
}
