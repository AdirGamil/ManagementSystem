import { useEffect, useState } from 'react'
import { fetchReports } from '../services/report.service'
import { ReportList } from '../cmps/ReportsSystem/ReportList'
import { ReportFilter } from '../cmps/ReportsSystem/ReportFilter'
import { ExcelButton } from '../cmps/ReportsSystem/ExcelButton'

/*
Reports page component displays two report lists: one for coupons used by
user and one for coupons used within a date range. The component also
includes a filter form for selecting the date range.
 */

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
      <ExcelButton />
      <ReportList title="Coupons by Date Range" reports={reportsByDateRange} />
      <ExcelButton />
    </div>
  )
}
