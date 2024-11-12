export function ReportPreview({
  id,
  userId,
  username,
  couponId,
  couponCode,
  dateUsed,
}) {
  return (
    <div className="report-preview">
      <div className="report-info">
        <p>Report ID: {id}</p>
        <p>User ID: {userId}</p>
        <p>Username: {username}</p>
        <p>Coupon ID: {couponId}</p>
        <p>Coupon Code: {couponCode}</p>
        <p>Date Used: {dateUsed}</p>
      </div>
    </div>
  )
}
