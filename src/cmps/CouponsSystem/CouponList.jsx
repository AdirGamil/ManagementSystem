import { CouponPreview } from './CouponPreview'

export function CouponList({ coupons, isAdmin }) {
  return (
    <div className="coupon-list">
      <h3>Available Coupons</h3>
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
