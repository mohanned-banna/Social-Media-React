import React from 'react'
import HomeIcons from '../components/HomeIcons'
import HomePageBody from '../components/HomePageBody'
import UserInformation from '../components/UserInformation'
import HomeNavBar from './../components/HomeNavBar'


export default function HomePage() {
  return (
    <div>
      <div className='flex flex-col'>
        <HomeNavBar />
        <HomePageBody />
      </div>
    </div>
  )
}
