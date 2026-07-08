import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import ProgramDetails from './pages/ProgramDetails'



function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/:slug" element={<ProgramDetails />} />
      </Route>
    </Routes>
    
  )
}

export default App
