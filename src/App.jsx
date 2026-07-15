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
import AdminLogin from './pages/admin/AdminLogin'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/admin/AdminDashboard'
import Gallery from './pages/Gallery'
import JobVacancy from './pages/JobVacancy'


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/:slug" element={<ProgramDetails />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/jobs" element={<JobVacancy />} />
      </Route>
     <Route path="/admin/login" element={<AdminLogin />} />
     <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

    </Routes>
    
  )
}

export default App
