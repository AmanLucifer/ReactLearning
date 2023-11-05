import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compnents/card'

function App() {
  const [count, setCount] = useState(0)
  // let obj ={
  //   name: "aman",
  //   age: 14
  // }

  return (
    <>
      <h1 className='bg-blue-500 p-5 rounded-lg text-black mb-4'>Haa Haa Aur Code </h1>
      <Card username="Aman" btntext="Click here"/>
      <Card username="Ram" btntext="Get in touch"/>
      <Card />
      <Card />
    </>
  )
}
export default App


