export function ReportPreview({ report, isTable }) {
  const { id, userId, username, couponId, couponCode, dateUsed } = report

  return isTable ? (
    // Render a table row
    <tr className="report-row">
      <td>{id}</td>
      <td>{userId}</td>
      <td>{username}</td>
      <td>{couponId}</td>
      <td>{couponCode}</td>
      <td>{dateUsed}</td>
    </tr>
  ) : (
    // Render a card
    <div className="report-card">
      <p className="report-item">
        <strong>Report ID:</strong> {id}
      </p>
      <p className="report-item">
        <strong>User ID:</strong> {userId}
      </p>
      <p className="report-item">
        <strong>Username:</strong> {username}
      </p>
      <p className="report-item">
        <strong>Coupon ID:</strong> {couponId}
      </p>
      <p className="report-item">
        <strong>Coupon Code:</strong> {couponCode}
      </p>
      <p className="report-item">
        <strong>Date Used:</strong> {dateUsed}
      </p>
    </div>
  )
}

