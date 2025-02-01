import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <userContextProvide>
      <h1>Context API in react</h1>
      <Login/>
      <Profile/>
    </userContextProvide>
  )
}

export default App
