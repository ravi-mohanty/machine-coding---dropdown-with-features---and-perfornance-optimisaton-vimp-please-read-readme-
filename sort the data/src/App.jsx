import { useState } from 'react'
import Showdata from './Showdata'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Showdata />
  )
}

export default App
