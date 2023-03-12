import classNames from 'classnames'
import React from 'react'

export default function HomeIcons({icon,classname}) {
  return (
    <div className={classNames("w-11 h-11 bg-white rounded-md mr-3 text-center leading-[44px] inline-block",classname)}>
        <i className={icon}></i>
    </div>
  )
}
