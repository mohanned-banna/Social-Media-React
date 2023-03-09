import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactIcon(props) {
    const {icon , link} = props
  return (
    <div >
      <Link to={link} className="text-2xl ml-14 md:ml-0 " ><i className= {icon}></i></Link>
    </div>
  )
}
