import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Footer } from './cmps/Footer'
import { Navbar } from './cmps/Navbar.jsx'

export function RootCmp() {
  return (
    <Router>
      <section className="main-container">
        <Navbar/>
        <main>
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </main>
        <Footer/>
      </section>
    </Router>
  )
}
