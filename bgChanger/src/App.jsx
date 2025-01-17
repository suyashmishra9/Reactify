import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")


  const colorGreen = () =>{
    setColor("green")
     
  }
  const colorRed = () =>{  
    setColor("red")
     
  }
  const colorBlue = () =>{
    setColor("blue")
     
  }
  const colorYellow = ()  => {
    setColor("yellow")
  }

  return (
    <>
      <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded' onClick={colorGreen}>Green</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-3' onClick={colorRed}>Red</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3' onClick={colorBlue} >Blue</button>
        <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded ml-3' onClick={colorYellow}>Yellow</button>
      </div>
    </>
  )
}

export default App
