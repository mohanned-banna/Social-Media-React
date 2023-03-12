import React from 'react'
import userImage from './../images/userImage.png'

export default function UserData() {
  return (
    <div>
       <div className='logo flex items-center  gap-3 border-b-2 pb-2'>
            <img src={userImage} alt="this is user image" className='w-12'/>
            <div className='user-data'>
                <h2 className='text-lg font-semibold font-sans'>Mohanned El-Banna</h2>
                <span className='text-sm'>@mohanned-banna</span>
            </div>
        </div>
    </div>
  )
}
