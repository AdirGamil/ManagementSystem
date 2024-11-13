import { ReportPreview } from './ReportPreview'

/**
 * ReportList component renders a list of reports in both table and card formats.
 */
export function ReportList({ reports, title }) {
  return (
    <div className="report-list">
      <h2>{title}</h2>
      {/* Render reports in a table format */}
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

      {/* Render reports in a card format */}
      <div className="report-cards">
        {reports.map((report) => (
          <ReportPreview key={report.id} report={report} isTable={false} />
        ))}
      </div>
    </div>
  )
}
