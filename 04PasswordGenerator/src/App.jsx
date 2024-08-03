import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

export default function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVMXYXabcdefghijklmnopqrstuvwxyz'
    if (number) str += "0123456789"
    if (symbol) str += "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, number, symbol, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [symbol, number, length, passwordGenerator])


  return (
    <div>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md" >
        <h2 className='p-3 text-center text-white'>Password Generator</h2>
        <div className='flex mb-4 overflow-hidden rounded-lg shadow'>
          <input
            className='w-full px-3 py-1 outline-none'
            readOnly
            placeholder='Password'
            ref={passwordRef}
            value={password}
            type="text" />
          <button className='px-3 py-0.5 text-white bg-blue-700 outline-none shrink-0'  onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-1'>
            <input type="range" min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              name="" id=""
              className='cursor-pointer' />

            <label>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-1'>
            <input type="checkbox" name="" id="" defaultChecked={number} onChange={() => {
              setNumber((prv) => prv ? false : true)
            }} />
            <label>Number</label>
          </div>
          <div className='flex text-sm gap-x-1'>
            <input type="checkbox" name="" id="" defaultChecked={symbol} onChange={() => {
              setSymbol((prvValue) => !prvValue)
            }} />
            <label>Symbol</label>
          </div>
        </div>
      </div>
    </div>
  )
}
