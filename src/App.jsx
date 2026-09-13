import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0C0E] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
