import { ReportPreview } from './ReportPreview'

export function ReportList({ reports }) {
  return (
    <div>
      {reports.map((report) => (
        <ReportPreview
          key={report.id}
          id={report.reportId}
          userId={report.userId}
          username={report.username}
          couponId={report.couponId}
          couponCode={report.couponCode}
          dateUsed={report.dateUsed}
        />
      ))}
    </div>
  )
}
