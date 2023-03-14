import React from 'react'


export default function UserImage({userImage,classname}) {
  return (
    <div className={classname} >
      <img src={userImage} alt="this is user image" className='w-full'/>
    </div>
  )
}
