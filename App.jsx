import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addValue(){
    
    setCount(prevCount => prevCount+1)
    setCount(count+1)
  }
  function reduceValue(){
    setCount(count-1)
  }
  return (
    <>
     <h1>Counter Question</h1>
     <h2>Counter Value: {count}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
