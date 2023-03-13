import classNames from 'classnames'
import React from 'react'
import userImage from './../images/userImage.png'

export default function UserData({classname}) {
  return (
    <div className={classNames(classname)}>
       <div className= {classNames('logo flex items-center  gap-3 border-b-2 sm:border-0 pb-2 sm:pb-0 ')}>
            <img src={userImage} alt="this is user image" className='w-12'/>
            <div className='user-data min-w-[160px]'>
                <h2 className='text-lg font-semibold font-sans sm:text-[16px]'>Mohanned El-Banna</h2>
                <span className='text-sm sm:text-sm '>@mohanned-banna</span>
            </div>
        </div>
    </div>
  )
}
