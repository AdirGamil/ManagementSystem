import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

/**
 * AdminPanel component displays a page with links to the three main
 * systems for admins to manage: coupons, users, and reports.
 */
export function AdminPanel() {
  const navigate = useNavigate()

  /**
   * Handles the logout button click by navigating to the login page
   * and displaying a toast message for the user.
   */
  function handleLogout() {
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <div className="admin-panel">
      <h1>Welcome, Admin</h1>
      <p>Manage the coupon and user systems from here.</p>

      <div className="admin-actions">
        {/* Link to the users page for managing users */}
        <Link to="/users" className="admin-link" title="Manage Users">
          Manage Users
        </Link>
        {/* Link to the coupons page for managing coupons */}
        <Link to="/coupons" className="admin-link" title="Manage Coupons">
          Manage Coupons
        </Link>
        {/* Link to the reports page for managing reports */}
        <Link to="/reports" className="admin-link" title="Manage Reports">
          Manage Reports
        </Link>
      </div>

      {/* Button to log out of the app and navigate to the login page */}
      <button onClick={handleLogout} className="logout-button" title="Logout">
        Logout
      </button>
    </div>
  )
}
