import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import Footer from "./componets/Footer/Footer"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>PROYECTO AGENCIA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}</button>
      </div>
      <Footer />
    </>
  )
}

export default App
