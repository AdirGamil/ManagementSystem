import { NavLink } from 'react-router-dom'

export function Navbar() {
  const getActiveClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="" className={getActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={getActiveClass}>
            Admin Panel
          </NavLink>
        </li>
        <li>
          <NavLink to="/coupons" className={getActiveClass}>
            Coupons
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={getActiveClass}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={getActiveClass}>
            Reports
          </NavLink>
        </li>
      </ul>
      <div className="navbar-login">
        <NavLink to="/login" className={getActiveClass}>
          Login
        </NavLink>
      </div>
    </nav>
  )
}
