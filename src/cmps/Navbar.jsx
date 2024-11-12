import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const getActiveClass = ({ isActive }) => (isActive ? 'active' : '')
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><h1>Logo</h1></a>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="" className={getActiveClass} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={getActiveClass} onClick={closeMenu}>
            Admin Panel
          </NavLink>
        </li>
        <li>
          <NavLink to="/coupons" className={getActiveClass} onClick={closeMenu}>
            Coupons
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={getActiveClass} onClick={closeMenu}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={getActiveClass} onClick={closeMenu}>
            Reports
          </NavLink>
        </li>
        <li className="navbar-login">
          <NavLink to="/login" className={getActiveClass} onClick={closeMenu}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
