import { useState , useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const countFunc = () =>{
    setCount(count +1 )
  }

  const heavyFunc = (count) =>{
    for (let i = 0; i < 1000; i++) {
    }
    console.log("Executing heavy function");
    return count ; 
  }

  const heavy = useCallback(() => heavyFunc(count) , [count])
 

  return (
    <>
     <h1>Uses of Usememo() and useCallback()</h1>
     <h4>The counter value is : {heavy()}</h4>
     <button onClick={countFunc}>Click </button>
    </>
  )
}

export default App
