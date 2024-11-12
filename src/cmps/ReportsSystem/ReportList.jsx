import { ReportPreview } from './ReportPreview'

export function ReportList({ reports }) {
  return (
    <div className="report-list">
      <div className="report-cards">
        {reports.map((report) => (
          <ReportPreview key={report.id} report={report} isTable={false} />
        ))}
      </div>
      <table className="report-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>User ID</th>
            <th>Username</th>
            <th>Coupon ID</th>
            <th>Coupon Code</th>
            <th>Date Used</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <ReportPreview key={report.id} report={report} isTable={true} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
