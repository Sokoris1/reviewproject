import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Auth } from './pages/Auth'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Extra } from './pages/Extra'
import { Contacts } from './pages/Contacts'
import { Policy } from './pages/Policy'
import { Terms } from './pages/Terms'
import { Reviews } from './pages/Reviews'

function App() {
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
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
