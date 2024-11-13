import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function AdminPanel() {
  const navigate = useNavigate()

  function handleLogout() {
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <div className="admin-panel">
      <h1>Welcome, Admin</h1>
      <p>Manage the coupon and user systems from here.</p>

      <div className="admin-actions">
        <Link to="/users" className="admin-link" title="Manage Users">
          Manage Users
        </Link>
        <Link to="/coupons" className="admin-link" title="Manage Coupons">
          Manage Coupons
        </Link>
        <Link to="/reports" className="admin-link" title="Manage Reports">
          Manage Reports
        </Link>
      </div>

      <button onClick={handleLogout} className="logout-button" title="Logout">
        Logout
      </button>
    </div>
  )
}
