import React from 'react'
import UserContext from '../contextApi/UserContext'
import { useState, useContext } from 'react'
import '../App.css'


export default function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user,setUser} = useContext(UserContext)
    const addUser =(e)=> {
      e.preventDefault()
      setUser({password, username})
      password = ""
      username = ""
    }
    console.log(user)
  return (
    <div>
      <h1>Log In</h1>
      <input type="text" value={username} name="" id=""  onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <input type="password" name="" id="" value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }} />
      <button onClick={addUser}>LogIn</button>
    </div>
  )
}
