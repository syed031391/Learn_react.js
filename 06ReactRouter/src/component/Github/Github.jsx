import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
  
   const data = useLoaderData()
   console.log(data)
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>
    <h3>Name : {data.name}</h3>
    <h3>Github Public repos : {data.public_repos}</h3>
    <img src={data.avatar_url} className='block m-auto mt-2' alt="Git picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/syed031391')
      return response.json()
    
}