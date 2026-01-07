import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navebar } from './Navebar'
import { MainContent } from './MainContent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navebar />
      <MainContent />
    </>
  )
}


export default App