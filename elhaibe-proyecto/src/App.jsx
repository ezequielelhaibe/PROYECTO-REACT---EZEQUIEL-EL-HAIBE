import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import Footer from "./componets/Footer/Footer"
import ItemListConteiner from './componets/ItemListConteiner/ItemListConteiner'



function App() {
    return (
    <>
      <Navbar />
      <ItemListConteiner />
      <Footer />
    </>
  )
}

export default App
