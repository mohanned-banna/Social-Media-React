import React from 'react'


export default function UserImage({userimage,classname}) {
  return (
    <div className={classname} >
      <img src={userimage} alt="this is user image" className='w-full'/>
    </div>
  )
}
