import React from 'react'
import Post from './Post'
import RightBottomPanel from './RightBottomPanel'
import RightTopPanel from './RightTopPanel'
import UserInformation from './UserInformation'

export default function HomePageBody() {
  return (
    <div className='flex justify-between flex-col items-stretch h-[100vh] py-16 gap-5'>
      <UserInformation />
      <div className=' hidden xl:flex flex-col gap-4 mt-9 md:w-[21vw] lg:w-[20vw] fixed right-0  '>
        <RightTopPanel />
        <RightBottomPanel />
      </div>
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      
      </div>
    
  )
}
