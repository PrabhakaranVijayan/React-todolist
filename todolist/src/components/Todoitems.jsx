import React from 'react'
import checked from "../assets/check-circle-regular-24.png"
import circle from "../assets/radio-circle-regular-24.png"
import del from "../assets/trash-solid-24.png"

const Todoitems = (props) => {
  return (
    <div className='flex items-center ps-2 pe-12 my-1'>
        <img className='w-6' src={checked} alt='checkedimage' />
        <p className='flex-auto ps-3'>{props.item}</p>
        <img className='w-6' src={del} alt='deleteimage' />
    </div>
  )
}

export default Todoitems