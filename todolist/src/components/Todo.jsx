import React, { useEffect, useRef, useState } from 'react'
import Todoitems from './Todoitems'

const Todo = () => {

  const[items,setodos]= useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
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
      setodos((prev)=>[...prev,newtask]) 
      inputvalue.current.value="" 
    }

    const deletetask=(id)=>{
      setodos((prevtodo)=>{
        return prevtodo.filter((one)=>{return one.id !== id})

      })
      
    }
    const toggle=(id)=>{
      setodos((pre)=>{
        return pre.map((each)=>{
          if(each.id==id){
            return {...each,iscompleted: !each.iscompleted}
          }
          return each
        })
      })
    }
    useEffect(()=>{
      console.log(items)
      localStorage.setItem("todos",JSON.stringify(items))

    },[items])
    
  return (
    
    <div className='bg-white md:w-4/12 sm:w-10/12 w-10/12 sm:h-5/6 h-5/6 md:h-5/6 rounded-xl mx-auto'>
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
             return <Todoitems toggle={toggle} key={item.id} text={item.task} id={item.id} deletetask={deletetask} iscomplete= {item.iscompleted} />
          })}
              
        </div>


    </div>
  )
}

export default Todo