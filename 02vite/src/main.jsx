import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Custom() {
  return (
    <h1>Custom || react</h1>
    //react learning with, Custom React

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Custom />
    
    <App />
  </React.StrictMode>,
);


