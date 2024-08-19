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

   
    <div>
    <input type="text" placeholder="Add a new task" class="w-full p-2 rounded-lg bg-white/50 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/70 mb-4" />
      <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md transition-colors duration-300">
        Add Task
      </button>
    </div>

  )
}
