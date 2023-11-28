import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Project from './pages/Project'


function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route exactPath='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/account' element={<Account />} />

      </Routes>


    </>
  )
}

export default App
