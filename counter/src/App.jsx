import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addvalue = () => {
    if (counter == 20) {
      console.log("Limit");
      return;
    } else {
      counter = counter + 1
      setCounter(counter)
      console.log(`the value of counter is : ${counter}`)
    }
  }
  const decvalue = () => {
    if (counter == 0) {
      console.log("Limit");
      return;
    } else {
      counter = counter - 1
      setCounter(counter)
      console.log(`the value of counter is : ${counter}`)
    }

  }
  return (
    <>
      <h1>React and Counter </h1>
      <h2>Counter :  {counter} </h2>
      <button onClick={addvalue} class="mrgn">Add value </button>
      <button onClick={decvalue} class="mrgn">Low Value</button>
    </>
  )
}

export default App
