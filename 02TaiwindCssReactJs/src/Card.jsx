import React from 'react'

export default function Card({infio, name}) {
     console.log(name)
  return (
    <div className='mt-6'>
      <div className='block m-auto bg-white  max-w-[500px] rounded overflow-hidden'>
      <div>
        <img className='w-[500px] h-96 '
        src="https://images.pexels.com/photos/27269439/pexels-photo-27269439/free-photo-of-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
         <h1 className='text-slate-600 font-bold text-center text-xl'>{name}</h1>
         <p className='p-2 text-slate-600'>{infio}</p>
      </div>
      <div>
         <button className='bg-red-400 text-white block m-auto p-2 mb-3 w-[200px] rounded-xl'>Read more</button>
      </div>
      </div>
    </div>
  )
}

