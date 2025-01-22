import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import OneItem from './components/oneItem/OneItem'

function App() {

  const [count, setCount] = useState(0)
  const [endPoint, setEndPoint] = useState('all')
  const [oneItem, setOneItem] = useState(null)

  return (
    <>
      {/* Header */}
      <Header setEndPoint={setEndPoint} setCount={setCount} endPoint={endPoint}/>
      {/* Main part */}
      <main>
        {/* Modal window */}
        {
          oneItem && <OneItem setOneItem={setOneItem} OneItem={oneItem}/>
        }
        {/* Hero */}
      <Hero endPoint={endPoint} count={count} setCount={setCount} setOneItem={setOneItem}/>
      {/* Footer */}
      <Footer/>
      </main>
    </>
  )
}

export default App
