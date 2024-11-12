export function ReportPreview({ report, isTable }) {
  const { reportId, userId, username, couponId, couponCode, dateUsed } = report

  return isTable ? (
    <tr className="report-row">
      <td>{reportId}</td>
      <td>{userId}</td>
      <td>{username}</td>
      <td>{couponId}</td>
      <td>{couponCode}</td>
      <td>{dateUsed}</td>
    </tr>
  ) : (
    <div className="report-card">
      <p className="report-item">Report ID: {reportId}</p>
      <p className="report-item">User ID: {userId}</p>
      <p className="report-item">Username: {username}</p>
      <p className="report-item">Coupon ID: {couponId}</p>
      <p className="report-item">Coupon Code: {couponCode}</p>
      <p className="report-item">Date Used: {dateUsed}</p>
    </div>
  )
}
