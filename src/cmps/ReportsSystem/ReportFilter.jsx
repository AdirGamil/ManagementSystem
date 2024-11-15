import toast from 'react-hot-toast'
import { FaSearch } from 'react-icons/fa'

/**
 * ReportFilter component renders a form that allows users to filter reports
 * by user ID/username and a date range. The form includes input fields for the
 * user, start date, and end date. When the form is submitted, a success message
 * is displayed using a toast notification.
 */
export function ReportFilter() {
  function handleApplyFilters(e) {
    e.preventDefault()
    toast.success('Filters applied successfully!')
  }

  return (
    <form onSubmit={handleApplyFilters} className="filter-form">
      <div className="filter-fields">
        <div className="filter-group">
          <label htmlFor="userFilter">User:</label>
          <input
            type="text"
            id="userFilter"
            placeholder="Enter User ID / Username"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" placeholder="Start date" />
        </div>
        <div className="filter-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" placeholder="End date" />
        </div>
        <button title="Apply filters" type="submit" className="filter-submit">
          <FaSearch />
        </button>
      </div>
    </form>
  )
}
