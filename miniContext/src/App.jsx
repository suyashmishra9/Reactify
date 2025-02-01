import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import userContextProvide from './Context/userContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvide>
      <h1>Context API in react</h1>
    </userContextProvide>
  )
}

export default App
