import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Haa aur Code</h1>
      <h2>Current Value: {counter} </h2>

      {/* Increase value */}
      <button onClick={() => {
        if (counter < 20) {
          setCounter(counter + 1)
        }
      }}>Add Value</button>

      <br /><br />

      {/* decrease Value */}
      <button onClick={() => {
        if (counter > 0) {
          setCounter(counter - 1)
        }
      }}>Remove Value</button>

      {/* footer */}
      <h3>Footer: {counter}</h3>

    </>
  )
}

export default App
