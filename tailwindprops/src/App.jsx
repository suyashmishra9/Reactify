import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS </h1>
      <Card  channel = "Chaiaurcode"/>
      <Card  channel= "Suyash React"/>
    </>
  )
}

export default App
ff