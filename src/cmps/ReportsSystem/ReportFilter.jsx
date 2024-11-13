import toast from 'react-hot-toast'

export function ReportFilter() {
  function handleApplyFilters(e) {
    e.preventDefault()
    toast.success('Filters applied successfully!')
  }

  return (
    <form onSubmit={handleApplyFilters} className="report-filter">
      <h3>Filter Reports</h3>
      <div className="filter-section">
        <label htmlFor="userFilter">User ID:</label>
        <input
          type="text"
          id="userFilter"
          placeholder="Enter user ID"
          required
        />
      </div>
      <div className="filter-section">
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" placeholder="Start date" />
      </div>
      <div className="filter-section">
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" placeholder="End date" />
      </div>
      <button type="submit" className="apply-filter">
        Apply Filters
      </button>
    </form>
  )
}
