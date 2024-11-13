import toast from 'react-hot-toast'
import { FaSearch } from "react-icons/fa";


export function ReportFilter() {
  function handleApplyFilters(e) {
    e.preventDefault()
    toast.success('Filters applied successfully!')
  }

  return (
    <form onSubmit={handleApplyFilters} className="filter-form">
    <div className="filter-fields">
        <div className="filter-group">
            <label htmlFor="userFilter">User ID:</label>
            <input
                type="text"
                id="userFilter"
                placeholder="Enter User ID"
                required
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
