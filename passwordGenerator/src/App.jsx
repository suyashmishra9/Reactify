import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(1)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

    if (number == true) { str += numbers }
    if (specialCharacters == true) { str += specialCharacters }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number, character, setPassword])

  useEffect(() => {passwordGenerator()},[length, number , character, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center'>Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input type="text"
            value={password}
            placeholder="Password"
            className='outline-none w-full py-1 px-3' />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 '>
            <input type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              value={length}
              onChange={() => { setNumber((prev) => !prev) }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultChecked={character}
              id='numberInput'
              value={length}
              onChange={() => { setCharacter((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
