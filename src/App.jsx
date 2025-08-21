import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Stories from './pages/Stories'
import SubmitStory from './pages/SubmitStory'
import About from './pages/About'
import Resources from './pages/Resources'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/submit-story' element={<SubmitStory />} />
          <Route path='/about' element={<About />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App