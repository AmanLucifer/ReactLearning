import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setpassword] = useState("Am++PQa+d%")
  const [boxpass, setBoxpass] = useState('')

  const genNumber = (propes) => {
    const characters = propes;
    let randomString = '';

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString
  }
  const copyfunction = () => {
    const pass = document.querySelector('#inputpassword')
    if (pass) {
      pass.select()
      document.execCommand('copy');
    }
    setBoxpass(pass.value);

  }
  return (
    <>
      <h1>Password Generator</h1><br /><br />

      <input
        id='inputpassword'
        type="text"
        className='rounded-xl p-3 text-center  mx-5 text-xl'
        value={password}
      /><br /><br
      />
      <button className='bg-indigo-500 mx-5'
        onClick={() => {
          setpassword(genNumber('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'))
        }}>Password</button>
      <button className='bg-indigo-500 '
        onClick={() => {
          setpassword(genNumber('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
          )
        }}>Number</button>
      <button className='bg-indigo-500 mx-5'
        onClick={() => {
          setpassword(genNumber('~`!@#$%^&*()_-+=}{[]<>,.?/;":ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'))
        }}>Symbole</button>
      <button className='bg-red-500' onClick={copyfunction}>
        Copy
      </button> <br /><br />
      {boxpass ? (
        <div id="passwordBox" className=' text-white rounded-2xl text-lg font-bold bg-slate-950 p-3'
        >This is Copyed  : {boxpass}</div>
      ) : ("")}


    </>
  )
}

export default App

