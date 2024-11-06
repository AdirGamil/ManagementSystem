import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Footer } from './cmps/Footer'
import { Navbar } from './cmps/Navbar.jsx'
import { AdminPanel } from './pages/AdminPanel'
import { Coupons } from './pages/Coupons'
import { Login } from './pages/Login'
import { Users } from './pages/Users'
import { Reports } from './pages/Reports'

export function RootCmp() {
  return (
    <Router>
      <section className="main-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </Router>
  )
}
