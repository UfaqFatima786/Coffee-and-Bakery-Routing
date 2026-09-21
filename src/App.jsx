import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import Reservations from "./pages/Reservations";
import Menu from "./pages/Menu";

import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<Reservations/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
