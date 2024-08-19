import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, editeTodo} from '../features/TodoSlice'
 
export default function Todolist() {

    const [edit , setEdit] = useState('')
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const editHandler=(id)=>{
      if(edit)
       {
        dispatch(editeTodo(id, {title:edit, complete:false}))
        setEdit('')
       }
    }

  return (
    <>
     
    </>
  )
}
