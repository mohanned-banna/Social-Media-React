import classNames from 'classnames'
import React from 'react'

export default function HomeIcons({icon,classname}) {
  return (
    <div className={classNames("w-11 h-11  rounded-md mr-3 text-center inline-block",classname)}>
        <i className={icon}></i>
    </div>
  )
}
