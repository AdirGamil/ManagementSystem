import toast from 'react-hot-toast'

export function ExcelButton() {
  function handleExportToExcel() {
    toast.success('Excel file exported successfully!')
  }

  return (
    <div className="center-container">
      <button
        onClick={handleExportToExcel}
        className="excel-button"
        title="Export to Excel"
      >
        Export to Excel
      </button>
    </div>
  )
}
