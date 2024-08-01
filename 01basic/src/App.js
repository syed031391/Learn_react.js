import './App.css';
import { React } from 'react';
import { useState } from 'react';


function App() {

  const [Counter, setCounter] = useState(0)
  const [rest, setRest] = useState('')
  const addCounter=()=>
    {
      if(Counter ===20)
        {
           const span = document.querySelector(".span")
           span.style.color="red"
          alert("you can not add more number")
        }
        else
        {
     const span = document.querySelector(".span")
     span.style.color="green"
    setCounter(Counter+1)
  } 
  
 }
 
 const removeCounter=()=>
  {
    if(Counter===0)
    {
       const span = document.querySelector(".span")
      span.style.color="red"
      alert("you can nor remove the number any more")
    }
    else
    {
       const span = document.querySelector(".span")
      span.style.color="red"
      setCounter(Counter-1)
    }
  }

  const restCounter =()=>
  {
    let Counter = 0;
    setCounter(Counter)
  }
  return (
    <>
     <h2 className="h2" > Counter : <span className='span'>{Counter}</span> </h2>
    <div className="div1">
    <button className="btn1" onClick={addCounter}>Add</button>
    <button className="btn2" onClick={removeCounter}>Remove</button>
    <button className="btn3" onClick={restCounter}>Rest</button>
    </div>
     
    </>
  )
}

export default App;
