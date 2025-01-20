import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      {/* Header */}
      <Header/>
      {/* Main part */}
      <main>
        {/* Hero */}
      <Hero/>
      {/* Footer */}
      <Footer/>
      </main>
    </>
  )
}

export default App
