import React from 'react'
import Todoitems from './Todoitems'

const Todo = () => {
  return (
    <div className='bg-white w-1/3 h-3/4 rounded-xl mx-auto'>
        {/* heading */}
        <div className='flex justify-center py-3'>
            <h1 className='font-sans font-semibold'>Todo-list</h1>
        </div>
        
        {/* input box */}
        <div className='flex justify-center my-3'>
            <input className='border-0 outline-none focus:ring focus:border-blue-500 rounded-sm bg-slate-200 ps-2 me-1 py-1 w-2/3' placeholder='Add your task' type='text'/>
            <button className='border-solid border-sky-800 rounded px-3 py-0 bg-sky-800 text-white'>Add</button>
        </div>

        {/* todoitems */}
        <div>
            <Todoitems />
            <Todoitems item="learn html nad css" />
            <Todoitems />
        </div>


    </div>
  )
}

export default Todo