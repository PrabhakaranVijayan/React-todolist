import React from 'react'
import checked from "../assets/check-circle-regular-24.png"
import circle from "../assets/radio-circle-regular-24.png"
import del from "../assets/trash-solid-24.png"


const Todoitems = ({text, id, deletetodo, iscomplete}) => {
  return (
    <div className='flex items-center ps-2 pe-12 my-1'>
        <img className='w-7' src={circle} alt='checkedimage' />
        <p className='flex-auto ps-3 font-medium text-lg pb-1' style={{textDecoration: iscomplete?"line-through":"none"}}>{text}</p>
        <img className='w-6' onClick={()=>{deletetodo(id)}} src={del} alt='deleteimage' />
    </div>
  )
}

export default Todoitems