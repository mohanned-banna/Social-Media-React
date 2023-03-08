import React from 'react'

export default function ButtonSubmit(props) {
  const {name} = props
  return (
    <div className="container w-11/12 mx-auto">
        <div className='bg-[#775bb9] hover:bg-[#6876b7e2] duration-300 w-[17rem] sm:w-[47%] mx-auto rounded-full h-14 leading-[56px] text-center '>
            <button className='text-white w-full rounded-full'>{name}</button>
        </div>
    </div>
  )
}
