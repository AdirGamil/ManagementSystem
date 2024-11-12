import { useEffect, useState } from 'react'
import { fetchReports } from '../services/report.service'
import { ReportList } from '../cmps/ReportsSystem/ReportList'
import { ReportFilter } from '../cmps/ReportsSystem/ReportFilter'

export function Reports() {
  const [reports, setReports] = useState([])

  // Load reports data from the service
  async function loadReports() {
    const data = await fetchReports()
    setReports(data)
  }

  useEffect(() => {
    loadReports()
  }, [])

  return (
    <div className="reports-page">
      <h1 className='reports-page-title'>Reports System</h1>
      <ReportFilter />
      <ReportList reports={reports} />
    </div>
  )
}
