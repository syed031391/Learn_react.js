import { useState } from 'react';
function App() {

const [color , setColor]= useState('green')
  return (
<>
    <div className="w-full overflow-hidden h-svh bg-slate-600" style={{backgroundColor :color}}>
     <div className='flex justify-center py-[60%]'>
      <div className='p-2 bg-white rounded-3xl'>
      <button
      onClick={()=>setColor('red')} className='p-1 m-1 rounded-xl w-[130px] text-white font-bold' style={{backgroundColor:'red'}}
      >Red</button>
      <button
      onClick={()=>setColor('DarkKhaki')} className='p-1 m-1 bg-red-400 rounded-xl w-[130px] text-white font-bold' style={{backgroundColor:'darkkhaki'}}
      >DarkKhaki</button>
      <button
      onClick={()=>setColor('Salmon')} className='p-1 m-1 bg-red-400 rounded-xl  w-[130px] text-white font-bold' style={{backgroundColor:'salmon'}}
      >Salmon</button>
      <button
      onClick={()=>setColor('HotPink')} className='p-1 m-1 bg-red-400 rounded-xl  w-[130px] text-white font-bold' style={{backgroundColor:'hotpink'}}
      >HotPink</button>
      <button
      onClick={()=>setColor('Orange')} className='p-1 m-1 rounded-xl  w-[130px] text-white font-bold' style={{backgroundColor:'Orange'}}
      >Orange</button>
      </div>
     </div>
    </div>
</>
  )
}

export default App
