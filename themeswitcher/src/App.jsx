import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const[themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() =>{
   document.querySelector('html').className.remove("light", "dark")
   document.querySelector('html').className.add(themeMode)

  }, [themeMode])



  return (
    <ThemeProvider value = {{themeMode ,darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebtn */}
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* card */}
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
