import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Auth } from './pages/Auth'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Extra } from './pages/Extra'
import { Contacts } from './pages/Contacts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/extra" element={<Extra />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
