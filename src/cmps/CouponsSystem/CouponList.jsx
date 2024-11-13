import { CouponPreview } from './CouponPreview'

export function CouponList({ coupons, isAdmin }) {
  return (
    <div className="coupon-list">
      <h1>Available Coupons</h1>
      {coupons.length > 0 ? (
        <ul>
          {coupons.map((coupon) => (
            <li key={coupon.id}>
              <CouponPreview coupon={coupon} isAdmin={isAdmin} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No coupons available</p>
      )}
    </div>
  )
}
