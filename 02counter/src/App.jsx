import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(15)

  // let counter = 15


  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter)
    if(counter < 20){
      setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // this will print the 16 only because useState send the update to UI in batches.

      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // in this 19 is printed because it takes the previous value of counter and then increment it.
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue} >Add Value</button>
    <br />
    <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
