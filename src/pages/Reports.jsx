import { useEffect, useState } from 'react'
import { fetchReports } from '../services/report.service'
import { ReportList } from '../cmps/ReportsSystem/ReportList'
import { ReportFilter } from '../cmps/ReportsSystem/ReportFilter'
import { ExcelButton } from '../cmps/ReportsSystem/ExcelButton'

export function Reports() {
  const [reportsByUser, setReportsByUser] = useState([])
  const [reportsByDateRange, setReportsByDateRange] = useState([])

  // Load reports data from the service
  async function loadReports() {
    const data = await fetchReports()
    setReportsByUser(data.createdByUser)
    setReportsByDateRange(data.createdWithinDateRange)
  }

  useEffect(() => {
    loadReports()
  }, [])

  return (
    <div className="reports-page">
      <h1 className="reports-page-title">Reports System</h1>
      <ReportFilter />
      <ReportList title="Coupons by User" reports={reportsByUser} />
      <ReportList title="Coupons by Date Range" reports={reportsByDateRange} />
      <ExcelButton />
    </div>
  )
}
