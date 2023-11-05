import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#4287f5')

  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className='flex fixed flex-wrap bottom-10 justify-center inset-x-0 px-2'>
        <div className='bg-white flex text-center p-3 rounded-full'>
          <button onClick={() => setColor('red')} className='p-2 mx-2 rounded-lg text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button  onClick={() => setColor('green')}className='p-2 mx-2 rounded-lg text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button  onClick={() => setColor('blue')}className='p-2 mx-2 rounded-lg text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button  onClick={() => setColor('black')}className='p-2 mx-2 rounded-lg text-white' style={{ backgroundColor: "black" }}>Black</button>
          <button  onClick={() => setColor('gray')}className='p-2 mx-2 rounded-lg text-white' style={{ backgroundColor: "gray" }}>Gray</button>
        </div>
      </div>
    </div>

  )
}
export default App
