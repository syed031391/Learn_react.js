import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/TodoSlice'

export default function TodoForm() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')
  const addhandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (

   
    <div className=' flex justify-center text-slate-500 font-mono font-bold'>
      <input type="text" placeholder='Add Todo' value={todo} onChange={(e)=>setTodo(e.target.value)}
      className='max-w-full p-2 rounded-sm  outline-none shadow-lg bg-white/30  border-black' 
      />
      <button className='p-2 rounded-sm shadow-lg bg-white/30  border-black'
      onClick={addhandler} >Add</button>
    </div>

  )
}
