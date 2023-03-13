import classNames from 'classnames'
import React from 'react'

export default function ButtonSubmit({name,classname}) {
  return (
        <div className={classNames('bg-[#775bb9] hover:bg-[#6876b7e2] duration-300 w-[20rem] sm:w-[47%] mx-auto   rounded-full h-14 leading-[56px] text-center ',classname)}>
            <button className='text-white w-full rounded-full'>{name}</button>
        </div>
  )
}
