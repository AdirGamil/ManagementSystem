import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { PageAnimation } from './cmps/PageAnimation'

import { Home } from './pages/Home'
import { Footer } from './cmps/Footer'
import { Navbar } from './cmps/Navbar'
import { AdminPanel } from './pages/AdminPanel'
import { Coupons } from './pages/Coupons'
import { Login } from './pages/Login'
import { Users } from './pages/Users'
import { Reports } from './pages/Reports'

export function RootCmp() {
  const location = useLocation()
  const key = location.pathname

  return (
    <section className="main-container">
      <Navbar />
      <main>
        <PageAnimation key={key}>
          <Routes location={location}>
            <Route path="" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </PageAnimation>
      </main>
      <Footer />
      <Toaster />
    </section>
  )
}
