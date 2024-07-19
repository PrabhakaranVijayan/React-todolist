import React, { useEffect, useRef, useState } from 'react'
import Todoitems from './Todoitems'

const Todo = () => {

  const[items,setitems]= useState([]);
    const inputvalue= useRef();
    const add=()=>{
      const value= inputvalue.current.value.trim()
      if(value.length===0){
        return alert ("please add some task")
      }
      const newtask= {
        id:Date.now(),
        iscompleted:false,
        task:value
        
      } 
      setitems((prev)=>[...prev,newtask]) 
      inputvalue.current.value="" 
    }

    const deletetask=(id)=>{
      setitems((prevtodo)=>{
        return prevtodo.filter((one)=>{one.id !== id})

    })
  }
    useEffect(()=>{
      console.log(items)

    },[items])
    
  return (
    
    <div className='bg-white w-1/3 h-3/4 rounded-xl mx-auto'>
        {/* heading */}
        <div className='flex justify-center py-3'>
            <h1 className='font-sans font-semibold'>Todo-list</h1>
        </div>
        
        {/* input box */}
        <div className='flex justify-center my-3'>
            <input ref={inputvalue} className='border-0 outline-none focus:ring focus:border-blue-500 rounded-sm bg-slate-200 ps-2 me-1 py-1 w-2/3' placeholder='Add your task' type='text'/>
            <button onClick={add} className='border-solid border-sky-800 rounded px-3 py-0 bg-sky-800 text-white'>Add</button>
        </div>

        {/* todoitems */}
        <div>
          {items.map((item)=>{
             return <Todoitems key={item.id} text={item.task} id={item.id} deletetodo={deletetask} iscomplete= {item.iscompleted} />
          })}
              
        </div>


    </div>
  )
}

export default Todo